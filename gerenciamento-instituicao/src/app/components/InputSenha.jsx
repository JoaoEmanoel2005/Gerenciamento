"use client";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function InputSenha({ placeholder = "Senha", ...props }) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={mostrarSenha ? "text" : "password"}
        placeholder={placeholder}
        className="p-3 border border-black rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-700 pr-10"
        {...props}
      />
      <button
        type="button"
        onClick={() => setMostrarSenha(!mostrarSenha)}
        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
      >
        {mostrarSenha ? (
          <EyeSlashIcon className="h-5 w-5" />
        ) : (
          <EyeIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
