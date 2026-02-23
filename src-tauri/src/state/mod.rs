use std::sync::Mutex;

use sqlx::SqlitePool;

#[derive(Default)]
pub struct DbPool {
    pub pool: Mutex<Option<SqlitePool>>,
}
