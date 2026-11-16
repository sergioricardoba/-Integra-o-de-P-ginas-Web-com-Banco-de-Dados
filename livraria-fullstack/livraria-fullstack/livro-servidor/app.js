const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const livrosRouter = require('./routes/livros');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_req, res) => res.json({ mensagem: 'API da Livraria online' }));
app.use('/livros', livrosRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ ok: false, mensagem: 'Erro interno do servidor' });
});

module.exports = app;
