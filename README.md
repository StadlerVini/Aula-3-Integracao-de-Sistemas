# API de Gestão de Produtos

Este projeto consiste no desenvolvimento de uma **API REST** para a gestão de produtos, utilizando **Flask (Python) ou Express (Node.js)**. A API permite operações CRUD (Create, Read, Update, Delete) e implementa tratamento adequado de erros.

## Tecnologias Utilizadas
- **Flask (Python) ou Express (Node.js)** (dependendo da escolha do desenvolvedor)
- **Banco de Dados** (SQLAlchemy para Flask, Sequelize ou outro ORM para Express)
- **Versionamento com Git**

## Estrutura do Banco de Dados
Foi criada uma tabela chamada `produtos` com os seguintes campos:

| Campo                | Tipo         | Descrição                              |
|----------------------|-------------|----------------------------------|
| `id`                | INT (PK)     | Identificador único (auto-incremento) |
| `nome`              | STRING       | Nome do produto                 |
| `fornecedor`        | STRING       | Nome do fornecedor               |
| `endereco_fornecedor` | STRING       | Endereço do fornecedor           |
| `quantidade`        | INT          | Quantidade disponível            |
| `endereco`          | STRING       | Local de armazenamento           |
| `preco_unitario`    | FLOAT        | Preço unitário do produto        |

A tabela foi populada com **quatro registros fictícios**.

## Rotas da API
A API implementa as seguintes rotas:

### **1. Listar todos os produtos**
**GET /produtos**

Retorna a lista de todos os produtos cadastrados.

### **2. Adicionar um novo produto**
**POST /produtos**

Adiciona um novo produto ao banco de dados.

### **3. Atualizar um produto existente**
**PUT /produtos/:id**

Atualiza os dados de um produto pelo seu ID.

### **4. Remover um produto**
**DELETE /produtos/:id**

Remove um produto do banco de dados pelo ID.

## Tratamento de Erros
A API retorna códigos de status para diferentes cenários:

| Código | Significado                  |
|--------|------------------------------|
| 200    | Operação bem-sucedida        |
| 404    | Produto não encontrado       |
| 500    | Erro interno no servidor    |
| 501    | Método não implementado     |
| 502    | Erro externo ao servidor    |

## Testes com cURL
Para testar a API, criamos um arquivo `testes_curl.txt` contendo comandos cURL para cada operação CRUD:

- `GET /produtos`
- `POST /produtos`
- `PUT /produtos/:id`
- `DELETE /produtos/:id`