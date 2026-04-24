import { useState } from "react";

export default function Ex8() {
  const [visor, setVisor] = useState("0");
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operador, setOperador] = useState(null);
  const [novoNumero, setNovoNumero] = useState(true);

  function adicionarDigito(digito) {
    if (novoNumero) {
      setVisor(digito);
      setNovoNumero(false);
      return;
    }

    setVisor((valorAtual) => (valorAtual === "0" ? digito : valorAtual + digito));
  }

  function adicionarPonto() {
    if (novoNumero) {
      setVisor("0.");
      setNovoNumero(false);
      return;
    }

    if (!visor.includes(".")) {
      setVisor((valorAtual) => valorAtual + ".");
    }
  }

  function limpar() {
    setVisor("0");
    setValorAnterior(null);
    setOperador(null);
    setNovoNumero(true);
  }

  function executarOperacao(numero1, numero2, operacao) {
    switch (operacao) {
      case "+":
        return numero1 + numero2;
      case "-":
        return numero1 - numero2;
      case "*":
        return numero1 * numero2;
      case "/":
        return numero2 === 0 ? "Erro" : numero1 / numero2;
      default:
        return numero2;
    }
  }

  function escolherOperacao(operacaoEscolhida) {
    const numeroAtual = Number(visor);

    if (valorAnterior === null) {
      setValorAnterior(numeroAtual);
    } else if (operador) {
      const calculo = executarOperacao(valorAnterior, numeroAtual, operador);
      if (calculo === "Erro") {
        setVisor("Erro");
        setValorAnterior(null);
        setOperador(null);
        setNovoNumero(true);
        return;
      }
      setValorAnterior(calculo);
      setVisor(String(calculo));
    }

    setOperador(operacaoEscolhida);
    setNovoNumero(true);
  }

  function calcularResultado() {
    if (valorAnterior === null || operador === null) return;

    const numeroAtual = Number(visor);
    const calculo = executarOperacao(valorAnterior, numeroAtual, operador);

    setVisor(String(calculo));
    setValorAnterior(null);
    setOperador(null);
    setNovoNumero(true);
  }

  const botoes = [
    ["9", "8", "7"],
    ["6", "5", "4"],
    ["3", "2", "1"],
    ["+", "0", "-"],
    ["=", ".", "C"],
  ];

  function clicarBotao(botao) {
    if (/^[0-9]$/.test(botao)) adicionarDigito(botao);
    if (botao === ".") adicionarPonto();
    if (["+", "-"].includes(botao)) escolherOperacao(botao);
    if (botao === "=") calcularResultado();
    if (botao === "C") limpar();
  }

  return (
    <div>
      <h2>Ex8 - Calculadora Completa</h2>
      <p>Calculadora com funcionamento completo para soma e subtração, seguindo o modelo visual da lista.</p>

      <div className="malopes-calculadora">
        <div className="malopes-titulo">CALCULADORA COMPLETA</div>
        <div className="malopes-visor">{visor}</div>
        <div className="malopes-teclado">
          {botoes.flat().map((botao) => (
            <button key={botao} onClick={() => clicarBotao(botao)}>
              {botao}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
