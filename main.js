let botoes = document.getElementsByClassName("btn");

let visor = document.querySelector(".visor-numero");

let valorDigitado = "";
let operadorDigitado = "";
let valor = [];
let operador = [];
let resultado;

// console.log(botoes);

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", receberNumeros);
}

function receberNumeros(e) {
  const numero = e.target.getAttribute("data-value");
  const operadorCalc = e.target.getAttribute("data-operador");
  const limparCalc = e.target.getAttribute("data-clear");
  const resultadoCalc = e.target.getAttribute("data-resultado");
  mostrarTelaClick(e);

  if (numero) {
    if (
      numero == "." &&
      valorDigitado.charAt(valorDigitado.length - 1) == "."
    ) {
      window.alert("Já existe um ponto, adicione outro número.");
    } else {
      valorDigitado += numero;
    }

    console.log(valorDigitado);
  } else {
    // let operadorDigitado = operadorCalc;
    // visor.innerHTML += operadorDigitado;
    valorConvertido = parseFloat(valorDigitado);
    console.log(valorConvertido);
    if (!isNaN(valorConvertido)) {
      if (valor.length === 0 || typeof valor[valor.length - 1] === "string") {
        valor.push(valorConvertido);
      }
    }

    if (operadorCalc) {
      if (typeof valor[valor.length - 1] === "number") {
        valor.push(operadorCalc);
      }
    }
    if (limparCalc) {
      limpar();
    }
    if (resultadoCalc) {
      if (typeof valor[valor.length - 1] == "string") {
        window.alert("Operação Invalida!");
      } else {
        operacoes();
      }
    }

    valorDigitado = "";
  }

  console.log(valor);
}

function operacoes() {
  for (let i = 0; i < valor.length; i++) {
    if (valor.includes("*") || valor.includes("/")) {
      console.log(valor[i]);
      if (valor[i] === "*") {
        console.log(valor[i]);
        let atual = i;
        console.log("aqui é o atual", atual);
        let anterior = valor[i - 1];
        let posterior = valor[i + 1];
        console.log("anterior: ", anterior);
        console.log("Posterior: ", posterior);
        valor.splice(atual - 1, 3, parseFloat(anterior * posterior));
        i = 0;
      }
      if (valor[i] === "/") {
        let atual = i;
        console.log("aqui é o atual", atual);
        let anterior = valor[i - 1];
        let posterior = valor[i + 1];
        console.log("anterior: ", anterior);
        console.log("Posterior: ", posterior);
        valor.splice(atual - 1, 3, parseFloat(anterior / posterior));
        i = 0;
      }
    } else {
      if (valor[i] === "+") {
        let atual = i;
        console.log("Aqui é o atual", atual);
        let anterior = valor[i - 1];
        let posterior = valor[i + 1];
        console.log("anterior ", anterior);
        console.log("posterior", posterior);
        valor.splice(atual - 1, 3, parseFloat(anterior + posterior));
        i = 0;
      }
      if (valor[i] === "-") {
        let atual = i;
        let anterior = valor[i - 1];
        let posterior = valor[i + 1];
        valor.splice(atual - 1, 3, parseFloat(anterior - posterior));
      }
    }
  }
  mostrarTelaResultado(valor);
}
function mostrarTelaClick(e) {
  if (e.target.innerHTML !== "=") {
    if (visor.innerHTML === "0") {
      visor.innerHTML = e.target.innerHTML.toLowerCase();
    } else {
      visor.innerHTML += e.target.innerHTML.toLowerCase();
    }
    visorResponsivo(visor);
  }
}
function mostrarTelaResultado(valorCalc) {
  visor.innerHTML = valorCalc;
  visorResponsivo(visor);
}
function visorResponsivo(visorBruto) {
  if (visorBruto.innerHTML.length > 5) {
    visor.style.fontSize = "5rem";
  }
  if (visor.innerHTML.length > 7) {
    visor.style.fontSize = "4rem";
  }
  if (visor.innerHTML.length > 9) {
    visor.style.fontSize = "3rem";
  }
  if (visor.innerHTML.length > 12) {
    visor.style.fontSize = "2rem";
  }
  if (visor.innerHTML.length > 19) {
    visor.style.fontSize = "1.5rem";
  }
  if (visor.innerHTML.length > 24) {
    visor.style.fontSize = "1.3rem";
  }
  if (visor.innerHTML.length > 29) {
    visor.style.fontSize = "1rem";
  }
}
function limpar() {
  valor.splice(0);
  visor.innerHTML = "0";
}
