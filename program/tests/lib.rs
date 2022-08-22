#![cfg(feature = "test-bpf")]

use pixel_crew_program::{entrypoint::process_instruction, instruction::PixelCrewInstruction};
use solana_program::pubkey::Pubkey;
use solana_program_test::{processor, tokio, ProgramTest};
use solana_sdk::{
    signature::{Keypair, Signer},
    transaction::Transaction,
};
use solana_validator::test_validator::TestValidatorGenesis;

const PROGRAM_NAME: &str = "pixel_crew_program";

#[tokio::test]
async fn test_create_instruction() {
    let admin = Keypair::new();
    let (test_validator, payer) = TestValidatorGenesis::default()
        .add_program(PROGRAM_NAME, pixel_crew_program::id())
        .start_async()
        .await;

    let rpc_client = test_validator.get_async_rpc_client();
    let block_hash = rpc_client.get_latest_blockhash().await.unwrap();

    let transaction = Transaction::new_signed_with_payer(
        &[PixelCrewInstruction::create(
            &payer.pubkey(),
            admin.pubkey().to_bytes(),
            64,
            64,
        )],
        Some(&payer.pubkey()),
        &[&payer],
        block_hash,
    );

    rpc_client
        .send_and_confirm_transaction(&transaction)
        .await
        .unwrap();
}
