use webrtc::peer_connection::RTCPeerConnection;
use webrtc::api::APIBuilder;
use webrtc::peer_connection::configuration::RTCConfiguration;
use webrtc::peer_connection::sdp::session_description::RTCSessionDescription;
use std::sync::Arc;

pub struct MediaManager {
    pub api: webrtc::api::API,
}

impl MediaManager {
    pub fn new() -> Self {
        let api = APIBuilder::new().build();
        Self { api }
    }

    pub async fn create_peer_connection(&self) -> Result<Arc<RTCPeerConnection>, String> {
        let config = RTCConfiguration::default();
        let pc = self.api.new_peer_connection(config)
            .await
            .map_err(|e| e.to_string())?;
        
        Ok(Arc::new(pc))
    }

    pub async fn handle_offer(&self, offer: String) -> Result<String, String> {
        let pc = self.create_peer_connection().await?;
        let desc = RTCSessionDescription::offer(offer);
        pc.set_remote_description(desc).await.map_err(|e| e.to_string())?;
        
        let answer = pc.create_answer(None).await.map_err(|e| e.to_string())?;
        pc.set_local_description(answer.clone()).await.map_err(|e| e.to_string())?;
        
        Ok(answer.sdp)
    }
}
