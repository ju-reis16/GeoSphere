const jwt = require('jsonwebtoken');

const loginAluno = (req, res) => {
    const { email, senha } = req.body;

    const emailCorreto = process.env.ALUNO_EMAIL;
    const senhaCorreta = process.env.ALUNO_SENHA;

    // validação simples
    if (email !== emailCorreto || senha !== senhaCorreta) {
        return res.status(401).json({
            message: "Email ou senha inválidos"
        });
    }

    // cria token JWT
    const token = jwt.sign(
        { email, tipo: "aluno" },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
    );

    return res.status(200).json({
        message: "Login realizado com sucesso",
        token
    });
};

module.exports = {
    loginAluno
};