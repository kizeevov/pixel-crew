pub mod instruction;
mod processor;
mod state;

#[cfg(not(feature = "no-entrypoint"))]
pub mod entrypoint;

pub const CONFIG_SEED: &str = "Config";

solana_program::declare_id!("996h7ZQaRMLG7RQMCK1pheX3vAbJ1m9DJPjts4XgsUvb");
