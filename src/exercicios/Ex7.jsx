import { useState } from 'react';

export default function Ex7() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcular(operacao) {
    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if (valor1 === '' || valor2 === '' || Number.isNaN(numero1) || Number.isNaN(numero2)) {
      setMensagem('Digite dois valores numéricos.');
      setResultado('');
      return;
    }

    if (operacao === '/' && numero2 === 0) {
      setMensagem('Não é possível dividir por zero.');
      setResultado('');
      return;
    }

    setMensagem('');

    const operacoes = {
      '+': numero1 + numero2,
      '-': numero1 - numero2,
      '*': numero1 * numero2,
      '/': numero1 / numero2
    };

    setResultado(operacoes[operacao]);
  }

  return (
    <div>
      <h2>Ex7 - Calculadora Básica</h2>

      <div className="calculadora-basica">
        <h3>Calculadora Básica</h3>

        <label>
          Valor1:
          <input type="number" value={valor1} onChange={(event) => setValor1(event.target.value)} />
        </label>

        <label>
          Valor2:
          <input type="number" value={valor2} onChange={(event) => setValor2(event.target.value)} />
        </label>

        <label>
          Resultado:
          <input readOnly value={resultado} />
        </label>

        <div className="botoes-operacoes">
          <button onClick={() => calcular('+')}>+</button>
          <button onClick={() => calcular('-')}>-</button>
          <button onClick={() => calcular('*')}>*</button>
          <button onClick={() => calcular('/')}>/</button>
        </div>
      </div>

      {mensagem && <p className="mensagem erro">{mensagem}</p>}
    </div>
  );
}
