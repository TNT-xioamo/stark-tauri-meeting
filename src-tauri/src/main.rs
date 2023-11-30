// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod tauri_rush;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
// fn create_win() {
//     tauri::Builder::default()
//         .setup(|app| {
//         let docs_window = tauri::WindowBuilder::new(
//         app,
//         "external", /* the unique window label */
//         tauri::WindowUrl::External("https://tauri.app/".parse().unwrap())
//         ).build()?;
//         let local_window = tauri::WindowBuilder::new(
//         app,
//         "local",
//         tauri::WindowUrl::App("index.html".into())
//         ).build()?;
//         Ok(())
//     })
// }
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, tauri_rush::rush_mac::get_mac_address])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
