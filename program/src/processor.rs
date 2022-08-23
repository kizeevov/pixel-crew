use crate::instruction::PixelCrewInstruction;
use crate::instruction::PixelCrewInstruction::Sell;
use crate::state::CanvasConfig;
use borsh::BorshDeserialize;
use solana_program::account_info::{next_account_info, AccountInfo};
use solana_program::entrypoint::ProgramResult;
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use solana_program::{msg, system_instruction};

pub struct Processor;

impl Processor {
    pub fn process(_program_id: &Pubkey, accounts: &[AccountInfo], input: &[u8]) -> ProgramResult {
        let instruction = PixelCrewInstruction::try_from_slice(input)?;
        match instruction {
            PixelCrewInstruction::Create {
                admin,
                width,
                height,
            } => Self::process_create(accounts, admin, width, height),
            PixelCrewInstruction::Draw => Self::process_draw(),
            PixelCrewInstruction::Sell => Self::program_sell(),
        }
    }

    fn process_create(
        accounts: &[AccountInfo],
        admin: [u8; 32],
        width: u32,
        height: u32,
    ) -> ProgramResult {
        let acc_iter = &mut accounts.iter();

        let admin_info = next_account_info(acc_iter)?;
        let config_info = next_account_info(acc_iter)?;
        let rent_info = next_account_info(acc_iter)?;
        let system_program_info = next_account_info(acc_iter)?;

        if !admin_info.is_signer {
            return Err(ProgramError::MissingRequiredSignature);
        }

        let (config_pubkey, bump_seed) = CanvasConfig::get_config_pubkey_with_bump();
        if config_pubkey != *config_info.key {
            return Err(ProgramError::InvalidArgument);
        }

        let config = CanvasConfig {
            admin,
            width,
            height,
        };

        todo!()
    }

    fn process_draw() -> ProgramResult {
        todo!()
    }

    fn program_sell() -> ProgramResult {
        todo!()
    }
}
