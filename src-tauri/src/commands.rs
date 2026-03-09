use serde::{Deserialize, Serialize};

use crate::identity::{IdentityState, UserProfile, AuthType};
use crate::network::NetworkManager;
use crate::storage::{StorageManager, MessageRecord};
use crate::media::MediaManager;
use std::sync::Mutex;
use tauri::State;

#[derive(Serialize, Deserialize)]
pub struct Chat {
    id: String,
    name: String,
    last_message: String,
    timestamp: u64,
    chat_type: String, // "direct", "group", "channel", "space"
}

pub struct AppState {
    pub identity: Mutex<IdentityState>,
    pub network: Mutex<NetworkManager>,
    pub storage: Mutex<StorageManager>,
    pub media: Mutex<MediaManager>,
}

#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! Welcome to WHYAPP.", name)
}

#[tauri::command]
pub async fn login(
    state: State<'_, AppState>,
    username: String, 
    auth_type: String
) -> Result<UserProfile, String> {
    let auth_enum = match auth_type.as_str() {
        "phone" => AuthType::Phone,
        "email" => AuthType::Email,
        "wallet" => AuthType::Wallet,
        _ => return Err("Invalid auth type".to_string()),
    };

    let profile = UserProfile {
        id: uuid::Uuid::new_v4().to_string(),
        username: username.clone(),
        display_name: username,
        avatar_url: None,
        auth_type: auth_enum,
    };

    let mut identity = state.identity.lock().unwrap();
    identity.add_account(profile.clone());
    identity.switch_account(&profile.id)?;

    Ok(profile)
}

#[tauri::command]
pub async fn switch_account(
    state: State<'_, AppState>,
    user_id: String
) -> Result<(), String> {
    let mut identity = state.identity.lock().unwrap();
    identity.switch_account(&user_id)
}

#[tauri::command]
pub async fn send_message(
    state: State<'_, AppState>,
    chat_id: String, 
    content: String
) -> Result<(), String> {
    let identity = state.identity.lock().unwrap();
    let sender_id = identity.accounts.get(identity.active_user_id.as_ref().unwrap_or(&"".to_string()))
        .map(|p| p.username.clone())
        .unwrap_or_else(|| "anonymous".to_string());
    
    let msg = MessageRecord {
        id: uuid::Uuid::new_v4().to_string(),
        chat_id: chat_id.clone(),
        sender_id,
        content: content.clone(),
        timestamp: chrono::Utc::now().timestamp(),
        encrypted: true,
    };

    let storage = state.storage.lock().unwrap();
    storage.save_message(msg).await?;

    // In a real app, you'd also send it via the NetworkManager here
    let network = state.network.lock().unwrap();
    let _ = network.send(format!("{{\"chat_id\": \"{}\", \"content\": \"{}\"}}", chat_id, content)).await;

    Ok(())
}

#[tauri::command]
pub async fn get_chats() -> Result<Vec<Chat>, String> {
    // For now, return a static list. In production, this would fetch from SQLite 'chats' table
    Ok(vec![
        Chat {
            id: "1".to_string(),
            name: "Hyper Group 1".to_string(),
            last_message: "Welcome to WHYAPP!".to_string(),
            timestamp: chrono::Utc::now().timestamp() as u64,
            chat_type: "group".to_string(),
        }
    ])
}

use crate::ai::{AIManager, AIResponse};

#[tauri::command]
pub async fn get_messages(
    state: State<'_, AppState>,
    chat_id: String,
    limit: i32
) -> Result<Vec<MessageRecord>, String> {
    let storage = state.storage.lock().unwrap();
    storage.get_messages(&chat_id, limit).await
}

#[tauri::command]
pub async fn ask_ai(content: String) -> Result<AIResponse, String> {
    AIManager::get_smart_reply(&content).await
}

#[tauri::command]
pub async fn translate_text(text: String, target_lang: String) -> Result<String, String> {
    AIManager::translate(&text, &target_lang).await
}
