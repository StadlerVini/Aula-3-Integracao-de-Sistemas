const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.get('/', (req, res) => {
  connection.query('SELECT * FROM loja', (err, results) => {
    if (err) {
      console.error('Erro ao consultar loja:', err);
      return res.status(500).json({ message: 'Erro interno no servidor' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Nenhum produto encontrado' });
    }
    res.status(200).json(results);
  });
});

router.post('/', (req, res) => {
  const { nome, fornecedor, endereco_fornecedor, quantidade, endereco, preco_unitario } = req.body;

  if (!nome || !fornecedor || !quantidade || !preco_unitario) {
    return res.status(400).json({ message: 'Dados incompletos' });
  }

  const query = `INSERT INTO loja (nome, fornecedor, endereco_fornecedor, quantidade, endereco, preco_unitario)
                 VALUES (?, ?, ?, ?, ?, ?)`;

  connection.query(query, [nome, fornecedor, endereco_fornecedor, quantidade, endereco, preco_unitario], (err, results) => {
    if (err) {
      console.error('Erro ao adicionar produto:', err);
      return res.status(500).json({ message: 'Erro interno no servidor' });
    }
    res.status(201).json({ message: 'Produto adicionado com sucesso', id: results.insertId });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nome, fornecedor, endereco_fornecedor, quantidade, endereco, preco_unitario } = req.body;

  if (!nome || !fornecedor || !quantidade || !preco_unitario) {
    return res.status(400).json({ message: 'Dados incompletos' });
  }

  const query = `UPDATE loja
                 SET nome = ?, fornecedor = ?, endereco_fornecedor = ?, quantidade = ?, endereco = ?, preco_unitario = ?
                 WHERE id = ?`;

  connection.query(query, [nome, fornecedor, endereco_fornecedor, quantidade, endereco, preco_unitario, id], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar produto:', err);
      return res.status(500).json({ message: 'Erro interno no servidor' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.status(200).json({ message: 'Produto atualizado com sucesso' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM loja WHERE id = ?`;
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Erro ao remover produto:', err);
      return res.status(500).json({ message: 'Erro interno no servidor' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.status(200).json({ message: 'Produto removido com sucesso' });
  });
});

module.exports = router;
