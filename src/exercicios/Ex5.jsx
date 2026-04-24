import { useState } from 'react';

function gerarFibonacci(quantidade) {
  const sequencia = [];

  for (let i = 0; i < quantidade; i++) {
    if (i === 0) {
      sequencia.push(0);
    } else if (i === 1) {
      sequencia.push(1);
    } else {
      sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
    }
  }

  return sequencia;
}

export default function Ex5() {
  const [numero, setNumero] = useState('');
  const [sequencia, setSequencia] = useState([]);
  const [mensagem, setMensagem] = useState('');

  function calcularSequencia() {
    const n = Number(numero);

    if (!Number.isInteger(n) || n <= 0) {
      setMensagem('Digite um número inteiro maior que zero.');
      setSequencia([]);
      return;
    }

    setMensagem('');
    setSequencia(gerarFibonacci(n));
  }

  return (
    <div>
      <h2>Ex5 - Mostrar n elementos da sequência de Fibonacci</h2>

      <div className="formulario linha">
        <label>
          Quantidade de elementos:
          <input
            type="number"
            min="1"
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
          />
        </label>
        <button className="botao" onClick={calcularSequencia}>Gerar sequência</button>
      </div>

      {mensagem && <p className="mensagem erro">{mensagem}</p>}

      {sequencia.length > 0 && (
        <table className="tabela">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {sequencia.map((valor, indice) => (
              <tr key={indice}>
                <td>{indice}</td>
                <td>{valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
