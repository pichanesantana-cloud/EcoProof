import React, { useState } from "react";

function App() {
  const [beforeImg, setBeforeImg] = useState<File | null>(null);
  const [afterImg, setAfterImg] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("EcoProof enviado! (integração com Sui vem aqui 🚀)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-700">
          EcoProof 🌱
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Imagem Antes */}
          <div>
            <label className="block font-medium mb-2">Foto Antes</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setBeforeImg(e.target.files ? e.target.files[0] : null)
              }
              className="w-full border p-2 rounded"
            />
            {beforeImg && (
              <img
                src={URL.createObjectURL(beforeImg)}
                alt="Antes"
                className="mt-2 rounded"
              />
            )}
          </div>

          {/* Imagem Depois */}
          <div>
            <label className="block font-medium mb-2">Foto Depois</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setAfterImg(e.target.files ? e.target.files[0] : null)
              }
              className="w-full border p-2 rounded"
            />
            {afterImg && (
              <img
                src={URL.createObjectURL(afterImg)}
                alt="Depois"
                className="mt-2 rounded"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
          >
            Enviar EcoProof
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
