use crate::CONFIG_SEED;
use solana_program::pubkey::Pubkey;

pub struct Config {
    /// Only admin can change this account
    pub admin: [u8; 32],

    /// Canvas width
    pub width: u32,

    /// Canvas height
    pub height: u32,
}

impl Config {
    pub fn get_config_pubkey_with_bump() -> (Pubkey, u8) {
        Pubkey::find_program_address(&[CONFIG_SEED.as_bytes()], &crate::id())
    }
}
