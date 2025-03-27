create database guilherme_db;
use guilherme_db;

CREATE TABLE loja (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    fornecedor VARCHAR(255) NOT NULL,
    endereco_fornecedor VARCHAR(255),
    quantidade INT NOT NULL,
    endereco VARCHAR(255),
    preco_unitario FLOAT NOT NULL
);

INSERT INTO loja (nome, fornecedor, endereco_fornecedor, quantidade, endereco, preco_unitario)
VALUES
    ('Headset Wireless Pro', 'AudioMax', 'Avenida do Som, 350', 150, 'Rua Acústica, 45', 149.90),
    ('Máquina de Café Premium', 'CoffeElite', 'Rua dos Eletros, 55', 120, 'Rua Barista, 101', 259.90),
    ('Celular UltraPhone Z', 'MobileTech', 'Rua dos Dispositivos, 230', 200, 'Av. Digital, 500', 999.99),
    ('Câmera Profissional 8K', 'VisionPhoto', 'Avenida das Cores, 700', 80, 'Rua dos Fotógrafos, 90', 1499.00);

select * from loja;