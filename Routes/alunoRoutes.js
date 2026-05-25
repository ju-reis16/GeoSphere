const express = require('express');
const router = express.Router();

const { loginAluno } = require('../controllers/alunoController');

// login do aluno
router.post('/login', loginAluno);

module.exports = router;