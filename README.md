# Carrinho de Compras - Cálculo do Custo Total

## Descrição

Este projeto é um exemplo simples de um sistema de carrinho de compras que calcula o valor total de uma compra. Cada item no carrinho é representado por um objeto que contém informações sobre o produto, incluindo o nome, o preço unitário e a quantidade comprada. A aplicação foi desenvolvida utilizando JavaScript, demonstrando conceitos fundamentais como arrays, objetos e funções.

## Objetivo

O objetivo deste projeto é fornecer uma maneira fácil e eficiente de calcular o custo total de uma compra em um mercado, considerando diversos itens com preços e quantidades diferentes.

## Estrutura do Projeto

### Array `carrinhoDeCompras`

O carrinho de compras é representado por um array de objetos, onde cada objeto representa um item adquirido. Cada item contém as seguintes propriedades:

- `nome`: O nome do produto.
- `preco`: O preço unitário do produto.
- `quantidade`: A quantidade comprada pelo cliente.

**Exemplo de item no carrinho**:
```js
{ nome: "Maçã", preco: 2.50, quantidade: 3 }
