const Livro = require('./livro-schema');

const obterLivros = async () => Livro.find().sort({ createdAt: -1 });
const incluir = async (livro) => Livro.create(livro);
const excluir = async (codigo) => Livro.deleteOne({ _id: codigo });

module.exports = { obterLivros, incluir, excluir };
