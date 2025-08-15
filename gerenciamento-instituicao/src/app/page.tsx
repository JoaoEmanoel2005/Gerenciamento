"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import InputSenha from "@/app/components/InputSenha";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-xs h-auto sm:h-[480px] bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col justify-center border-1">

        <h1 className="text-3xl font-bold text-center mb-10 border-b border-gray-400 pb-2">
          {isLogin ? "Login" : "Cadastro"}
        </h1>

        {isLogin ? <LoginForm /> : <RegisterForm setIsLogin={setIsLogin} />}

        <div className="text-center mt-6">
          <button
            type="button"
            className="text-blue-500 text-sm underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Criar uma conta" : "Já tem conta?"}
          </button>
        </div>

      </div>
    </main>
  );
}

function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Erro no login");
      }

      router.push("/home");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-700"
      />
      <InputSenha value={senha} onChange={(e: any) => setSenha(e.target.value)} />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        Entrar
      </button>
    </form>
  );
}

function RegisterForm({ setIsLogin }: { setIsLogin: (val: boolean) => void }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Erro no cadastro");

      window.alert("Conta criada com sucesso! Agora faça login.");
      setSuccess("Usuário cadastrado com sucesso!");
      
      // Resetar campos
      setNome("");
      setEmail("");
      setSenha("");
      // Voltar para login
      setTimeout(() => setIsLogin(true), 1000);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-700"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-700"
      />
      <InputSenha value={senha} onChange={(e: any) => setSenha(e.target.value)} />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
      <button
        type="submit"
        className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
      >
        Cadastrar
      </button>
    </form>
  );
}
