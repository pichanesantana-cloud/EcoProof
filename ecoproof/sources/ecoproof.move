module eco_proof::eco_proof_mvp {
    use sui::object::{UID, Self};
    use sui::tx_context::{TxContext, sender};
    use sui::transfer;
    use std::string::String;

    /// NFT dinâmico simples para representar provas ambientais
    struct EcoProofNFT has key, store {
        id: UID,
        owner: address,
        display_name: String,
        description: String,
        actions_done: u64,
        points: u64,
    }

    /// Mint inicial de um NFT EcoProof
    public entry fun mint_proof(
        display_name: String,
        description: String,
        ctx: &mut TxContext
    ) {
        let id = object::new(ctx);
        let owner = sender(ctx);
        let nft = EcoProofNFT {
            id,
            owner,
            display_name,
            description,
            actions_done: 0,
            points: 0,
        };
        transfer::transfer_object(nft, owner);
    }

    /// Registrar uma ação ambiental (incrementa contador e pontos)
    public entry fun register_action(
        nft: &mut EcoProofNFT,
        points: u64
    ) {
        nft.actions_done = nft.actions_done + 1;
        nft.points = nft.points + points;
    }

    /// Atualizar metadados (somente o dono pode chamar)
    public entry fun update_metadata(
        nft: &mut EcoProofNFT,
        new_name: String,
        new_description: String,
        ctx: &TxContext
    ) {
        assert!(nft.owner == sender(ctx), 0);
        nft.display_name = new_name;
        nft.description = new_description;
    }

    /// Transferir NFT
    public entry fun transfer_proof(
        nft: EcoProofNFT,
        recipient: address
    ) {
        transfer::transfer_object(nft, recipient);
    }

    /// Validar NFT (marcar como usado/validado)
    public entry fun validate_proof(
        nft: &mut EcoProofNFT,
        ctx: &TxContext
    ) {
        assert!(nft.owner == sender(ctx), 0);
        nft.points = 0; // Exemplo: zerar pontos ao validar
    }
}