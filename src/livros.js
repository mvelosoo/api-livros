const express = require('express');
const router = express.Router();

let livros = [
    { id: 1, titulo: 'Silêncio dos Inocentes' },
    { id: 2, titulo: 'O Mal-estar da civilização' },
];

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Retorna a lista de livros
 *     responses:
 *       200:
 *         description: Lista de livros retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   titulo:
 *                     type: string
 */
router.get('/', (req, res) => {
    res.json(livros);
});

module.exports = router;
