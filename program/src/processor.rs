use crate::instruction::PixelCrewInstruction;
use borsh::BorshDeserialize;
use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::msg;
use solana_program::pubkey::Pubkey;

pub struct Processor;

impl Processor {
    pub fn process(_program_id: &Pubkey, _accounts: &[AccountInfo], input: &[u8]) -> ProgramResult {
        msg!("counter: 1");
        let instruction = PixelCrewInstruction::try_from_slice(input)?;
        match instruction {
            PixelCrewInstruction::Create { width, height, .. } => {
                msg!("counter: 2 {} {}", width, height);
            }
            PixelCrewInstruction::Draw => {}
            PixelCrewInstruction::Sell => {}
        }

        // Err(ProgramError::Custom(23))
        Ok(())
    }
}
