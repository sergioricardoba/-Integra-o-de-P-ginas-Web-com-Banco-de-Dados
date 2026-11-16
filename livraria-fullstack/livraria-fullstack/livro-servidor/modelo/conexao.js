const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/livraria';

async function conectar() {
  await mongoose.connect(uri);
  console.log('Conectado ao MongoDB');
}
module.exports = conectar;
