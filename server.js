require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const alunoRoutes = require('./routes/alunoRoutes');

app.use('/aluno', alunoRoutes);

app.listen(3000, () => {
   app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('🚀 Servidor rodando!');
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`💾 Banco: PostgreSQL (${process.env.DB_NAME})`);
  console.log(`🌍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log('='.repeat(50));
});
});