"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import InputSenha from "@/app/components/InputSenha";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-xs h-auto sm:h-[450px] bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col justify-center border-1">

        {/* Título */}
        <h1 className="text-3xl font-bold text-center mb-10 border-b border-gray-400 pb-2">
          {isLogin ? "Login" : "Cadastro"}
        </h1>

        {/* Formulário */}
        {isLogin ? <LoginForm /> : <RegisterForm />}

        {/* Botão de alternar formulário */}
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui futuramente você vai validar login na API
    router.push("/home"); // Redireciona para /home
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        className="p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-700"
      />
      <InputSenha />
      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        Entrar
      </button>
    </form>
  );
}

function RegisterForm() {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nome"
        className="p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-700"
      />
      <input
        type="email"
        placeholder="Email"
        className="p-3 border border-black rounded focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-700"
      />
      <InputSenha />
      <button
        type="submit"
        className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
      >
        Cadastrar
      </button>
    </form>
  );
}
