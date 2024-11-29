Create database TonyPizzaria;
use TonyPizzaria;

CREATE TABLE PizzariaTony (
    Tony_ID INTEGER PRIMARY KEY,
    nome VARCHAR(10),
    CEP NUMERIC,
    CNPJ NUMERIC,
    Rua VARCHAR(100),
    numero NUMERIC,
    usuario_id INTEGER,
    Produtos_id INTEGER,
    FOREIGN KEY (Produtos_id) REFERENCES Produtos(Produtos_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id)
);

create table Produtos(
 Produtos_id integer primary key,
 Pizzas varchar(150),
 Sobremesas varchar(100),
 Bebidas varchar(100),
 Categorias_id integer,
 pedidos_id integer,
 comentarios_id integer,
 foreign key (comentario_id)
 references comentarios(comentario_id),
 foreign key (pedidos_id)
 references pedidos(pedidos_id),
 foreign key (categorias_id)
 references categorias(categorias_id)
 
);

create table categorias(
 categorias_id integer primary key,
 Sabor_Pizzas varchar(100),
 Sabor_Sobremesas varchar(100),
 Refrigerantes varchar(50),
 Bebidas_Alcoolicas varchar(50)
);

create table usuarios(
usuarios_id integer primary key,
    nome varchar(150),
    email varchar(100),
    senha varchar(100),
    telefone numeric,
    endereço varchar(100),
    login_id integer,
    foreign key (login_id)
    references login(login_id)
);

create table login(
login_id integer primary key,
    email varchar(100),
    senha varchar(100)
);

create table comentarios(
comentario_id integer primary key,
    nome varchar(100),
    Data date,
    descricao varchar(150),
    usuarios_id integer,
    foreign key (usuarios_id)
    references usuarios(usuarios_id)
);

create table pedidos(
pedidos_id integer primary key,
    Produtos varchar(100),
    Precos varchar(40),
    entregas varchar(40),
    formas_pagamento varchar(50)
); 