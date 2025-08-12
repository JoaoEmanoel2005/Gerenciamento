import InputSenha from "@/app/components/InputSenha";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">

      <div className="w-full max-w-xs h-auto sm:h-[400px] bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col justify-center border-1">

        <h1 className="text-3xl font-bold text-center mb-10 border-b border=gray-400 pb-2">Login</h1>

        <form className="flex flex-col gap-4">

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
      </div>
    </main>
  );
}
