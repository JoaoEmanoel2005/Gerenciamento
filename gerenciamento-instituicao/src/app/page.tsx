export default function Home() {
  return (
    <main className="min-h-screen flex item-center justify-center bg-gray-100">

      <div className="w-full max-w-sm bg-withe p-8 rounded-lg shadow-md border-1">

        <h1 className="text-2x1 font-bold text-center mb-6">Login</h1>

        <form className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className="p-3 border nporder-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 border nporder-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Enter
          </button>
        </form>
      </div>
    </main>



  );
}
