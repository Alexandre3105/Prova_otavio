//Questao 1 

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function listPrimes() {
  const primes = [];
  for (let number = 1; number <= 1000; number++) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }
  return primes;
}

const primeNumbers = listPrimes();
console.log(primeNumbers);





//Questao 2 
function verificarSenha(senha) {
  if (senha.length < 8) {
    return 'A senha deve ter pelo menos 8 caracteres.';
  }
  if (!senha.match(/[A-Z]/)) {
    return 'A senha deve conter pelo menos uma letra maiúscula.';
  }
  if (!senha.match(/[a-z]/)) {
    return 'A senha deve conter pelo menos uma letra minúscula.';
  }
  if (!senha.match(/[0-9]/)) {
    return 'A senha deve conter pelo menos um número.';
  }
  return 'A senha é válida!';
}

console.log(verificarSenha('Senha123')); // A senha é válida!
console.log(verificarSenha('senha123')); // A senha deve conter pelo menos uma letra maiúscula.
console.log(verificarSenha('Senha')); // A senha deve ter pelo menos 8 caracteres.
console.log(verificarSenha('12345678')); // A senha deve conter pelo menos uma letra maiúscula.




//Questao 3
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFatorial(numero - 1);
  }
}

// Testa a função para os números de 1 a 10
for (let i = 1; i <= 10; i++) {
  console.log(`O fatorial de ${i} é ${calcularFatorial(i)}`);
}



//Questao 4
function QuadradoPerfeito(number) {
  let raizquadrada  = Math.sqrt(number);
  return raizquadrada * squareRoot === number;
}

