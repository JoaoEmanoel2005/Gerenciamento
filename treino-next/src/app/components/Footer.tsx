export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Treino Next. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://github.com/JoaoEmanoel2005" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
            
          </div>
        </div>
      </footer>
    );
  }
  