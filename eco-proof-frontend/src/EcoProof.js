import React, { useState } from "react";
import {
  useWallet,
  WalletProvider,
  defaultWallets,
} from "@suiet/wallet-adapter-react";
import { JsonRpcProvider, TransactionBlock } from "@mysten/sui.js";

const provider = new JsonRpcProvider("https://fullnode.testnet.sui.io");

export default function EcoProof() {
  const { connect, disconnect, account, signAndExecuteTransactionBlock } = useWallet();
  const [nft, setNft] = useState(null);
  const [recipient, setRecipient] = useState("");
  const [metadata, setMetadata] = useState("");

  // Aqui você coloca o Package ID do módulo publicado
  const packageId = "0x1513fc4c3665400cb53e1707ab0cde98c4b5b28a943a6243bcac046d2dab6621"; // <- substitua por exemplo 0x123abc...

  // Criar NFT
  const mintNFT = async () => {
    if (!account) return alert("Conecte sua wallet primeiro!");
    try {
      const tx = new TransactionBlock();
      tx.moveCall({
        target: `${packageId}::eco_proof_mvp::mint_proof`,
        typeArguments: [],
        arguments: [
          tx.pure(account.address),
          tx.pure(Array.from(Buffer.from(metadata))),
        ],
      });

      const result = await signAndExecuteTransactionBlock({ transactionBlock: tx });
      console.log("NFT criado:", result);
      setNft(result);
    } catch (err) {
      console.error("Erro ao criar NFT:", err);
    }
  };

  // Transferir NFT
  const transferNFT = async () => {
    if (!account || !nft) return alert("Wallet ou NFT não definido!");
    try {
      const tx = new TransactionBlock();
      tx.moveCall({
        target: `${packageId}::eco_proof_mvp::transfer_proof`,
        typeArguments: [],
        arguments: [
          tx.object(nft), // objeto NFT criado
          tx.pure(recipient),
        ],
      });

      const result = await signAndExecuteTransactionBlock({ transactionBlock: tx });
      console.log("NFT transferido:", result);
    } catch (err) {
      console.error("Erro ao transferir NFT:", err);
    }
  };

  // Validar NFT
  const validateNFT = async () => {
    if (!account || !nft) return alert("Wallet ou NFT não definido!");
    try {
      const tx = new TransactionBlock();
      tx.moveCall({
        target: `${packageId}::eco_proof_mvp::validate_proof`,
        typeArguments: [],
        arguments: [
          tx.object(nft),
          tx.pure(account.address),
        ],
      });

      const result = await signAndExecuteTransactionBlock({ transactionBlock: tx });
      console.log("NFT válido?", result);
    } catch (err) {
      console.error("Erro ao validar NFT:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>EcoProof Demo com Wallet</h1>

      {!account ? (
        <button onClick={() => connect()}>Conectar Wallet</button>
      ) : (
        <>
          <div>
            <p>Wallet conectada: {account.address}</p>
            <button onClick={() => disconnect()}>Desconectar</button>
          </div>

          <div>
            <h2>Criar NFT</h2>
            <input
              placeholder="Metadata do NFT"
              value={metadata}
              onChange={(e) => setMetadata(e.target.value)}
            />
            <button onClick={mintNFT}>Mint NFT</button>
          </div>

          <div>
            <h2>Transferir NFT</h2>
            <input
              placeholder="Endereço do destinatário"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
            <button onClick={transferNFT}>Transfer NFT</button>
          </div>

          <div>
            <h2>Validar NFT</h2>
            <button onClick={validateNFT}>Validate NFT</button>
          </div>
        </>
      )}
    </div>
  );
}
