import { useState } from 'react';

function fibonacci(posicao) {
  if (posicao === 0) return 0;
  if (posicao === 1) return 1;

  let anterior = 0;
  let atual = 1;

  for (let i = 2; i <= posicao; i++) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return atual;
}

export default function Ex4() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState('');

  function calcular() {
    const n = Number(numero);

    if (!Number.isInteger(n) || n < 0) {
      setMensagem('Digite um número inteiro maior ou igual a zero.');
      setResultado(null);
      return;
    }

    setMensagem('');
    setResultado(fibonacci(n));
  }

  return (
    <div>
      <h2>Ex4 - Calcular o n-ésimo elemento de Fibonacci</h2>
      <p>Considerando Fibonacci com F(0) = 0 e F(1) = 1.</p>

      <div className="formulario linha">
        <label>
          Valor de n:
          <input
            type="number"
            min="0"
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
          />
        </label>
        <button className="botao" onClick={calcular}>Calcular</button>
      </div>

      {mensagem && <p className="mensagem erro">{mensagem}</p>}
      {resultado !== null && <p className="mensagem sucesso">F({numero}) = {resultado}</p>}
    </div>
  );
}
