import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) return alert("Digite um usuário");

    login(username);
    navigate("/");
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl text-green-300 font-mono mb-4">Login</h1>

      <form
        onSubmit={submit}
        className="flex flex-col gap-3 bg-black/80 p-4 border border-green-800 rounded"
      >
        <label className="font-mono text-xs text-green-300">Usuário</label>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 bg-black text-green-200 border border-green-700 rounded font-mono"
        />

        <button className="px-3 py-2 font-mono border border-green-700 rounded">
          Entrar
        </button>
      </form>
    </main>
  );
}
