const express = require('express');
const router = express.Router();

let livros = [
    { id: 1, titulo: 'Silêncio dos Inocentes' },
    { id: 2, titulo: 'O Mal-estar da civilização' }
];

router.get('/', (req, res) => {
    res.json(livros);
});

router.post('/', (req, res) => {
    const { titulo } = req.body;
    const novoLivro = { id: livros.length + 1, titulo };
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
});

module.exports = router;
