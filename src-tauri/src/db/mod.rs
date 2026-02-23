use std::fs;

use sqlx::SqlitePool;
use tauri::{AppHandle, Manager};

/// Create an SQLite connection pool
/// # Arguments
/// * `app_handle` - The tauri App Handle
pub async fn connect(app_handle: &AppHandle) -> Result<SqlitePool, sqlx::Error> {
    // Fetch the Application's data directory
    let mut app_data_dir = app_handle.path().app_data_dir().expect("COULD NOT FIND APP_DATA_DIR");

    // Append idrimen.sqlite3 to it
    app_data_dir.push("idrimen.sqlite3");

    // Create the database path if it doesn't exist
    if !app_data_dir.exists() {
        fs::File::create(&app_data_dir).expect("COULD NOT CREATE DB FILE");
    }

    // Connect and return the pool
    SqlitePool::connect(app_data_dir.display().to_string().as_str()).await
}
