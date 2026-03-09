use tauri::{AppHandle, WindowBuilder, WindowUrl};

pub struct SandboxManager;

impl SandboxManager {
    pub fn create_mini_program(app: &AppHandle, id: &str, url: &str) -> Result<(), String> {
        let label = format!("mini-app-{}", id);
        
        WindowBuilder::new(
            app,
            label,
            WindowUrl::External(url.parse().map_err(|e: url::ParseError| e.to_string())?)
        )
        .title(format!("Mini App: {}", id))
        .initialization_script("
            // Sandbox security: disable sensitive APIs
            window.localStorage = null;
            window.sessionStorage = null;
            window.indexedDB = null;
            console.log('Mini-program sandbox initialized');
        ")
        .build()
        .map_err(|e| e.to_string())?;

        Ok(())
    }
}
