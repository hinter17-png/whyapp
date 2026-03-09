use x25519_dalek::{PublicKey, StaticSecret};
use rand::rngs::OsRng;
use serde::{Deserialize, Serialize};
use aes_gcm::{
    aead::{Aead, KeyInit},
    Aes256Gcm, Nonce
};

#[derive(Serialize, Deserialize)]
pub struct KeyBundle {
    pub identity_key: Vec<u8>,
    pub signed_prekey: Vec<u8>,
    pub onetime_prekeys: Vec<Vec<u8>>,
}

pub struct EncryptionSession {
    pub root_key: [u8; 32],
    pub chain_key_send: [u8; 32],
    pub chain_key_recv: [u8; 32],
}

impl EncryptionSession {
    pub fn generate_keys() -> (StaticSecret, PublicKey) {
        let secret = StaticSecret::new(OsRng);
        let public = PublicKey::from(&secret);
        (secret, public)
    }

    pub fn encrypt(key: &[u8; 32], plaintext: &[u8]) -> Result<Vec<u8>, String> {
        let cipher = Aes256Gcm::new_from_slice(key)
            .map_err(|e| e.to_string())?;
        let nonce = Nonce::from_slice(&[0u8; 12]); // In production, use a unique nonce per message
        
        cipher.encrypt(nonce, plaintext)
            .map_err(|e| e.to_string())
    }

    pub fn decrypt(key: &[u8; 32], ciphertext: &[u8]) -> Result<Vec<u8>, String> {
        let cipher = Aes256Gcm::new_from_slice(key)
            .map_err(|e| e.to_string())?;
        let nonce = Nonce::from_slice(&[0u8; 12]);
        
        cipher.decrypt(nonce, ciphertext)
            .map_err(|e| e.to_string())
    }
}
