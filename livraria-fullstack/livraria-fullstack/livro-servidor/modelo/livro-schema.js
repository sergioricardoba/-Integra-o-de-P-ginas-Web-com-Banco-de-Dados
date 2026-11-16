const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
  titulo: { type: String, required: true, trim: true },
  autor: { type: String, required: true, trim: true },
  preco: { type: Number, required: true, min: 0 }
}, { timestamps: true, collection: 'livros' });

module.exports = mongoose.model('Livro', LivroSchema);
