# Sistema de Gerenciamento de instituição

Este é um projeto criado por mim, João Emanoel, para aprofundar meus conhecimentos na linguagem typescript, e trabalhar o uso de outros itens, como react e tailwind.

---

## Tecnologias

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)
- [Axios](https://axios-http.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- Tailwind CSS

---

## Pré-requisitos

- Node.js >= 18
- npm ou yarn
- MySQL rodando localmente ou remoto

---

## Configuração do projeto

1. Clone o repositório:

git https://github.com/JoaoEmanoel2005/Gerenciamento.git
cd Gerenciamento

2. Instale as dependências:

npm install
ou
yarn install


3. Crie o arquivo .env na raiz com as variáveis do banco:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=projeto_next


3. Crie a tabela usuarios no MySQL:

Basta executar o script sql, nele tem a linha para criar o banco e o codigo da tabela

4. Rodando o projeto

npm run dev
ou
yarn dev

Pronto, o projeto estará rodando em: http://localhost:3000
