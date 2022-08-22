use crate::CONFIG_SEED;

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Pixel {
    /// X position
    pub x: u32,

    /// Y position
    pub y: u32,

    /// Color
    pub rgb: [u8; 3],
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CanvasConfig {
    /// Only admin can change this account
    pub admin: [u8; 32],

    /// Canvas width
    pub width: u32,

    /// Canvas height
    pub height: u32,
}

impl CanvasConfig {
    pub fn get_config_pubkey_with_bump() -> (Pubkey, u8) {
        Pubkey::find_program_address(&[CONFIG_SEED.as_bytes()], &crate::id())
    }
}
