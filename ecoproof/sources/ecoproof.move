module ecoproof::eco_proof_mvp {

    use sui::object;
    use sui::tx_context;

    // NFT do projeto
    public struct EcoProofNFT has key, store {
        id: object::UID,
        owner: address,
        metadata: vector<u8>,
    }

    // Cria um NFT
    public fun mint_proof(owner: address, metadata: vector<u8>, ctx: &mut tx_context::TxContext): EcoProofNFT {
        let nft = EcoProofNFT {
            id: object::new(ctx),
            owner,
            metadata,
        };
        nft
    }

    // Transfere o NFT para outro endereço
    public fun transfer_proof(nft: &mut EcoProofNFT, recipient: address, _ctx: &mut tx_context::TxContext) {
        nft.owner = recipient;
    }

    // Valida dono do NFT
    public fun validate_proof(nft: &EcoProofNFT, owner: address): bool {
        nft.owner == owner
    }
}