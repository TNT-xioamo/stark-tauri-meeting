use std::process::Command;
use std::str;

#[tauri::command]
pub fn get_mac_address() -> String {
    let output = Command::new("ifconfig")
        .output()
        .expect("Failed to execute ifconfig");
    let output_str = str::from_utf8(&output.stdout).expect("Failed to convert output to string");
    let mac_address = output_str
        .lines()
        .filter(|line| line.contains("ether"))
        .flat_map(|line| line.split_whitespace().collect::<Vec<&str>>())
        .nth(1)
        .unwrap_or("Unknown");

    mac_address.to_string()
}