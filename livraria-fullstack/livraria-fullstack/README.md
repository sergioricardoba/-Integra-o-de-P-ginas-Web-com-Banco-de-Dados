# Livraria Full Stack

Projeto criado do zero para praticar MongoDB, Express, Mongoose, JavaScript, React, Next.js e Angular.

## Pré-requisitos

- Node.js 18 ou superior
- MongoDB local em execução ou MongoDB Atlas
- npm

## Estrutura

- `livro-servidor`: API REST em Express + Mongoose, porta 3030.
- `livros-react`: cliente React com Vite, porta 3000.
- `livros-next`: cliente Next.js, porta 3001.
- `livros-angular`: cliente Angular, porta 4200.

## Banco de dados

A aplicação usa `mongodb://127.0.0.1:27017/livraria` por padrão. Para alterar, crie um arquivo `.env` dentro de `livro-servidor`:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/livraria
PORT=3030
```

A coleção `livros` é criada automaticamente pelo Mongoose quando o primeiro livro é inserido.

## Execução

Abra quatro terminais:

```bash
cd livro-servidor && npm install && npm start
cd livros-react && npm install && npm run dev
cd livros-next && npm install && npm run dev
cd livros-angular && npm install && npm start
```

A API ficará em `http://localhost:3030/livros`; os clientes ficarão em `http://localhost:3000`, `http://localhost:3001` e `http://localhost:4200`.

## Endpoints

- `GET /livros`: lista livros.
- `POST /livros`: cadastra livro. Exemplo: `{ "titulo": "Dom Casmurro", "autor": "Machado de Assis", "preco": 29.9 }`.
- `DELETE /livros/:id`: remove livro pelo `_id` do MongoDB.

