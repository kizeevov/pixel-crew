use crate::state::CanvasConfig;

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::instruction::{AccountMeta, Instruction};
use solana_program::pubkey::Pubkey;
use solana_program::{system_program, sysvar};

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, PartialEq)]
pub enum PixelCrewInstruction {
    /// Create new canvas
    /// Accounts:
    /// 0. `[signer, writable]` admin of counters
    /// 1. `[writable]` settings_account, PDA
    /// 2. `[]` Rent sysvar
    /// 3. `[]` System program
    Create {
        admin: [u8; 32],
        width: u32,
        height: u32,
    },

    /// Accounts:
    /// 0. `[signer]` painter
    /// 1. `[]` settings_account, PDA
    Draw,

    /// Accounts:
    /// 0. `[signer, writable]` Admin of pixel_crew
    Sell,
}

impl PixelCrewInstruction {
    pub fn create(admin: &Pubkey, new_admin: [u8; 32], width: u32, height: u32) -> Instruction {
        let (config_pubkey, _) = CanvasConfig::get_config_pubkey_with_bump();
        Instruction::new_with_borsh(
            crate::id(),
            &PixelCrewInstruction::Create {
                admin: new_admin,
                width,
                height,
            },
            vec![
                AccountMeta::new(*admin, true),
                AccountMeta::new(config_pubkey, false),
                AccountMeta::new_readonly(sysvar::rent::id(), false),
                AccountMeta::new_readonly(system_program::id(), false),
            ],
        )
    }

    pub fn draw() -> Instruction {
        todo!()
    }

    pub fn sell(admin: &Pubkey) -> Instruction {
        todo!()
    }
}
