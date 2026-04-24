import { useState } from 'react';

function gerarMatrizAleatoria() {
  return Array.from({ length: 4 }, () =>
    Array.from({ length: 4 }, () => Math.floor(Math.random() * 100))
  );
}

export default function Ex6() {
  const [matriz, setMatriz] = useState(gerarMatrizAleatoria());

  return (
    <div>
      <h2>Ex6 - Tabela 4x4 com números inteiros aleatórios</h2>
      <p>A tabela abaixo possui 4 linhas e 4 colunas com números inteiros aleatórios.</p>

      <button className="botao" onClick={() => setMatriz(gerarMatrizAleatoria())}>
        Gerar novos números
      </button>

      <table className="tabela tabela-centralizada">
        <tbody>
          {matriz.map((linha, indiceLinha) => (
            <tr key={indiceLinha}>
              {linha.map((numero, indiceColuna) => (
                <td key={`${indiceLinha}-${indiceColuna}`}>{numero}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
