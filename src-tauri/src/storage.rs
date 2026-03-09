use sqlx::{sqlite::SqlitePoolOptions, Pool, Sqlite};
use std::sync::Arc;
use tokio::sync::Mutex;

pub struct StorageManager {
    pub pool: Option<Pool<Sqlite>>,
}

#[derive(sqlx::FromRow)]
pub struct MessageRecord {
    pub id: String,
    pub chat_id: String,
    pub sender_id: String,
    pub content: String,
    pub timestamp: i64,
    pub encrypted: bool,
}

impl StorageManager {
    pub fn new() -> Self {
        Self { pool: None }
    }

    pub async fn initialize(&mut self, database_url: &str) -> Result<(), String> {
        let pool = SqlitePoolOptions::new()
            .max_connections(5)
            .connect(database_url)
            .await
            .map_err(|e| e.to_string())?;

        // Initialize schema
        sqlx::query(
            "CREATE TABLE IF NOT EXISTS messages (
                id TEXT PRIMARY KEY,
                chat_id TEXT NOT NULL,
                sender_id TEXT NOT NULL,
                content TEXT NOT NULL,
                timestamp INTEGER NOT NULL,
                encrypted INTEGER DEFAULT 1
            )"
        )
        .execute(&pool)
        .await
        .map_err(|e| e.to_string())?;

        sqlx::query(
            "CREATE TABLE IF NOT EXISTS accounts (
                id TEXT PRIMARY KEY,
                username TEXT NOT NULL,
                display_name TEXT NOT NULL,
                auth_data TEXT NOT NULL
            )"
        )
        .execute(&pool)
        .await
        .map_err(|e| e.to_string())?;

        self.pool = Some(pool);
        Ok(())
    }

    pub async fn save_message(&self, msg: MessageRecord) -> Result<(), String> {
        let pool = self.pool.as_ref().ok_or("Storage not initialized")?;
        
        sqlx::query(
            "INSERT INTO messages (id, chat_id, sender_id, content, timestamp, encrypted) 
             VALUES (?, ?, ?, ?, ?, ?)"
        )
        .bind(msg.id)
        .bind(msg.chat_id)
        .bind(msg.sender_id)
        .bind(msg.content)
        .bind(msg.timestamp)
        .bind(msg.encrypted)
        .execute(pool)
        .await
        .map_err(|e| e.to_string())?;

        Ok(())
    }

    pub async fn get_messages(&self, chat_id: &str, limit: i32) -> Result<Vec<MessageRecord>, String> {
        let pool = self.pool.as_ref().ok_or("Storage not initialized")?;

        let messages = sqlx::query_as::<_, MessageRecord>(
            "SELECT * FROM messages WHERE chat_id = ? ORDER BY timestamp DESC LIMIT ?"
        )
        .bind(chat_id)
        .bind(limit)
        .fetch_all(pool)
        .await
        .map_err(|e| e.to_string())?;

        Ok(messages)
    }
}
