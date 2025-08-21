# Sistema de Gerenciamento de Instituição

Projeto criado por João Emanoel para aprofundar conhecimentos em **TypeScript**, além de praticar **React**, **Next.js**, **Tailwind CSS** e integração com **MySQL**.

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

### 1. Clone o repositório

```bash
git clone https://github.com/JoaoEmanoel2005/Gerenciamento.git
cd Gerenciamento


2. Instale as dependências:

npm install
# ou
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
# ou
yarn dev

Pronto, o projeto estará rodando em: http://localhost:3000
