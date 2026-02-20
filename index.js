const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual é o seu saldo? ", function(valor) {
  
  // substitui vírgula por ponto
  let valorFormatado = valor.replace(",", ".");
  
  let saldo = Number(valorFormatado);

  if (isNaN(saldo)) {
    console.log("Valor inválido ❌");
  } else if (saldo > 0) {
    console.log("Saque permitido 💰");
  } else {
    console.log("Saldo insuficiente ❌");
  }

  rl.close();
});