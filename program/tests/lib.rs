#![cfg(feature = "test-bpf")]

use program::{entrypoint::process_instruction, instruction::PixelCrewInstruction};
use solana_program_test::{processor, tokio, ProgramTest};
use solana_sdk::{
    signature::{Keypair, Signer},
    transaction::Transaction,
};

const PROGRAM_NAME: &str = "program";

#[tokio::test]
async fn test_create_instruction() {
    let admin = Keypair::new();

    let mut ctx = ProgramTest::new(PROGRAM_NAME, program::id(), processor!(process_instruction))
        .start_with_context()
        .await;

    // create
    let tx = Transaction::new_signed_with_payer(
        &[PixelCrewInstruction::create(
            &admin.pubkey(),
            admin.pubkey().to_bytes(),
            64,
            64,
        )],
        Some(&admin.pubkey()),
        &[&admin],
        ctx.last_blockhash,
    );
    ctx.banks_client.process_transaction(tx).await.unwrap();
}
