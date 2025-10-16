module ecoproof::ecoproof_simple {
    use sui::object::{Self, UID, ID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use std::string::{Self, String};
    use sui::event;

    // Estrutura simples de ação ambiental
    public struct EcoAction has key, store {
        id: UID,
        creator: address,
        description: String,
        location: String,
        points: u64,
    }

    // Evento quando ação é criada
    public struct ActionCreated has copy, drop {
        action_id: ID,
        creator: address,
        description: String,
        points: u64,
    }

    // Inicialização do módulo
    fun init(_ctx: &mut TxContext) {
        // Módulo inicializado
    }

    // Função principal: criar uma ação ambiental
    public entry fun create_action(
        description: vector<u8>,
        location: vector<u8>,
        points: u64,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        
        let action = EcoAction {
            id: object::new(ctx),
            creator: sender,
            description: string::utf8(description),
            location: string::utf8(location),
            points,
        };

        let action_id = object::id(&action);

        // Emitir evento
        event::emit(ActionCreated {
            action_id,
            creator: sender,
            description: action.description,
            points,
        });

        // Transferir para o criador
        transfer::public_transfer(action, sender);
    }

    // Função para visualizar detalhes
    public fun get_details(action: &EcoAction): (address, String, String, u64) {
        (action.creator, action.description, action.location, action.points)
    }
}