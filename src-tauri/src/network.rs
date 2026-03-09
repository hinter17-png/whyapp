use futures_util::{StreamExt, SinkExt};
use tokio_tungstenite::{connect_async, tungstenite::protocol::Message};
use url::Url;
use std::sync::Arc;
use tokio::sync::Mutex;
use tauri::AppHandle;
use tauri::Manager;

pub struct NetworkManager {
    pub ws_sender: Option<Arc<Mutex<futures_util::stream::SplitSink<tokio_tungstenite::WebSocketStream<tokio_tungstenite::MaybeTlsStream<tokio::net::TcpStream>>, Message>>>>,
}

impl NetworkManager {
    pub fn new() -> Self {
        Self { ws_sender: None }
    }

    pub async fn connect(&mut self, url: &str, app_handle: AppHandle) -> Result<(), String> {
        let (ws_stream, _) = connect_async(Url::parse(url).map_err(|e| e.to_string())?)
            .await
            .map_err(|e| e.to_string())?;

        let (write, mut read) = ws_stream.split();
        self.ws_sender = Some(Arc::new(Mutex::new(write)));

        tokio::spawn(async move {
            while let Some(message) = read.next().await {
                if let Ok(msg) = message {
                    match msg {
                        Message::Text(text) => {
                            // Emit event to frontend
                            let _ = app_handle.emit("new-message", text);
                        }
                        _ => {}
                    }
                }
            }
        });

        Ok(())
    }

    pub async fn send(&self, message: String) -> Result<(), String> {
        if let Some(sender) = &self.ws_sender {
            let mut sender = sender.lock().await;
            sender.send(Message::Text(message)).await.map_err(|e| e.to_string())?;
            Ok(())
        } else {
            Err("Not connected".to_string())
        }
    }
}
