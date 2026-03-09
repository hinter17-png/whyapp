// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod identity;
mod encryption;
mod storage;
mod media;
mod network;
mod sandbox;
mod ai;
mod finance;

use std::sync::Mutex;
use crate::commands::AppState;
use crate::identity::IdentityState;
use crate::network::NetworkManager;
use crate::storage::StorageManager;
use crate::media::MediaManager;
use tauri::Manager;

fn main() {
    tauri::Builder::default()
        .manage(AppState {
            identity: Mutex::new(IdentityState::new()),
            network: Mutex::new(NetworkManager::new()),
            storage: Mutex::new(StorageManager::new()),
            media: Mutex::new(MediaManager::new()),
        })
        .setup(|app| {
            let app_handle = app.handle();
            let app_data_dir = app.path_resolver().app_data_dir().unwrap_or_else(|| {
                std::path::PathBuf::from("./")
            });
            
            if !app_data_dir.exists() {
                std::fs::create_dir_all(&app_data_dir).unwrap();
            }

            let db_path = app_data_dir.join("whyapp.db");
            let db_url = format!("sqlite:{}", db_path.to_str().unwrap());

            let state = app.state::<AppState>();
            let mut storage = state.storage.lock().unwrap();
            
            // Run storage initialization in a block or spawn
            tauri::async_runtime::block_on(async {
                storage.initialize(&db_url).await.expect("Failed to initialize storage");
            });

            #[cfg(debug_assertions)] // only include this code on debug builds
            {
                let window = app.get_window("main").unwrap();
                window.open_devtools();
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            commands::greet,
            commands::login,
            commands::switch_account,
            commands::send_message,
            commands::get_chats,
            commands::get_messages,
            commands::ask_ai,
            commands::translate_text,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
