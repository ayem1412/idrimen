use tauri::{Manager, State};

use crate::state::DbPool;

mod db;
mod state;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    unsafe {
        #[cfg(target_os = "linux")]
        std::env::set_var("WEBKIT_DISABLE_DMABUF_RENDERER", "1");
    }

    tauri::Builder::default()
        .setup(|app| {
            tauri::async_runtime::block_on(async move {
                let pool = db::connect(app.app_handle())
                    .await
                    .expect("COULD NOT CONNECT TO THE DATABASE!");

                let state: State<DbPool> = app.state();
                *state.pool.lock().unwrap() = Some(pool);
            });

            Ok(())
        })
        .manage(DbPool::default())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
