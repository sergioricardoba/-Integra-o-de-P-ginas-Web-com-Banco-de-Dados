const express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');
const router = express.Router();

router.get('/', async (_req, res, next) => {
  try { res.json(await obterLivros()); } catch (erro) { next(erro); }
});

router.post('/', async (req, res, next) => {
  try {
    const livro = await incluir(req.body);
    res.status(201).json({ ok: true, mensagem: 'Livro incluído com sucesso', livro });
  } catch (erro) { next(erro); }
});

router.delete('/:codigo', async (req, res, next) => {
  try {
    const resultado = await excluir(req.params.codigo);
    res.json({ ok: resultado.deletedCount === 1, mensagem: resultado.deletedCount === 1 ? 'Livro excluído com sucesso' : 'Livro não encontrado' });
  } catch (erro) { next(erro); }
});

module.exports = router;
