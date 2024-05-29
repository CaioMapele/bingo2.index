function gerarCartela() {
    const cartela = [];
    
    const colunas = {
      B: { min: 1, max: 15 },
      I: { min: 16, max: 30 },
      N: { min: 31, max: 45 },
      G: { min: 46, max: 60 },
      O: { min: 61, max: 75 }
    };
    
    for (let coluna in colunas) {
      const { min, max } = colunas[coluna];
      const numeros = gerarNumerosUnicos(min, max, 5);
      cartela.push(numeros);
    }
    
    // Substitui o número central da coluna N com "Livre"
    cartela[2][2] = "Livre";
  
    return cartela;
  }
  
  function gerarNumerosUnicos(min, max, count) {
    const numeros = new Set();
    while (numeros.size < count) {
      const numero = Math.floor(Math.random() * (max - min + 1)) + min;
      numeros.add(numero);
    }
    return Array.from(numeros);
  }
  
  function exibirCartela(cartela) {
    const container = document.getElementById('bingo-card');
    container.innerHTML = '';
  
    const colunas = ["B", "I", "N", "G", "O"];
  
    // Adiciona cabeçalhos
    colunas.forEach(coluna => {
      const header = document.createElement('div');
      header.className = 'header';
      header.textContent = coluna;
      container.appendChild(header);
    });
  
    // Adiciona os números da cartela
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const cell = document.createElement('div');
        cell.textContent = cartela[j][i];
        container.appendChild(cell);
      }
    }
  }
  
  // Gerar e exibir a cartela ao carregar a página
  document.addEventListener('DOMContentLoaded', () => {
    const cartela = gerarCartela();
    exibirCartela(cartela);
  });
  