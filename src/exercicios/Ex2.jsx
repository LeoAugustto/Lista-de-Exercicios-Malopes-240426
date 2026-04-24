import { useState } from 'react';

export default function Ex2() {
  const [numero, setNumero] = useState('');
  const [texto, setTexto] = useState('');
  const [linhas, setLinhas] = useState([]);
  const [mensagem, setMensagem] = useState('');

  function gerarTabela() {
    const quantidade = Number(numero);

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
      setMensagem('Digite um número inteiro maior que zero.');
      setLinhas([]);
      return;
    }

    if (texto.trim() === '') {
      setMensagem('Digite uma linha de texto.');
      setLinhas([]);
      return;
    }

    setMensagem('');
    setLinhas(Array.from({ length: quantidade }, (_, indice) => ({
      indice: indice + 1,
      conteudo: texto
    })));
  }

  return (
    <div>
      <h2>Ex2 - Gerar tabela com n linhas</h2>

      <div className="formulario">
        <label>
          Número de linhas:
          <input
            type="number"
            min="1"
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
          />
        </label>

        <label>
          Texto:
          <input
            type="text"
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
          />
        </label>

        <button className="botao" onClick={gerarTabela}>Gerar tabela</button>
      </div>

      {mensagem && <p className="mensagem erro">{mensagem}</p>}

      {linhas.length > 0 && (
        <table className="tabela">
          <thead>
            <tr>
              <th>Índice</th>
              <th>Texto digitado</th>
            </tr>
          </thead>
          <tbody>
            {linhas.map((linha) => (
              <tr key={linha.indice}>
                <td>{linha.indice}</td>
                <td>{linha.conteudo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
