// Array de objetos que representa os itens do carrinho
const carrinhoDeCompras = [
  { nome: "Maça", preco: 2.5, quantidade: 3 },
  { nome: "Pão", preco: 4.0, quantidade: 2 },
  { nome: "Leite", preco: 5.0, quantidade: 1 },
  { nome: "Ovos", preco: 10.5, quantidade: 2 },
];

// Função para calcular o custo total do carrinho
const calcularCustoTotal = (carrinho) => {
  let total = 0; // Inicializa o total em zero

  // Itera por cada item do carrinh
  carrinho.forEach((item) => {
    // Multiplica o preço pela quantidade e adiciona ao total
    total += item.preco * item.quantidade;
  });

  return total; // Retorna o valor total
};

// Calcula o total do carrinho
const valorTotal = calcularCustoTotal(carrinhoDeCompras);

//Exibe o valor total das compras
console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);
