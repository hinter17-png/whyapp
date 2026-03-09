use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct UserProfile {
    pub id: String,
    pub username: String,
    pub display_name: String,
    pub avatar_url: Option<String>,
    pub auth_type: AuthType,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub enum AuthType {
    Phone,
    Email,
    Wallet,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct IdentityState {
    pub active_user_id: Option<String>,
    pub accounts: HashMap<String, UserProfile>,
}

impl IdentityState {
    pub fn new() -> Self {
        Self {
            active_user_id: None,
            accounts: HashMap::new(),
        }
    }

    pub fn add_account(&mut self, profile: UserProfile) {
        self.accounts.insert(profile.id.clone(), profile);
    }

    pub fn switch_account(&mut self, user_id: &str) -> Result<(), String> {
        if self.accounts.contains_key(user_id) {
            self.active_user_id = Some(user_id.to_string());
            Ok(())
        } else {
            Err("Account not found".to_string())
        }
    }
}
