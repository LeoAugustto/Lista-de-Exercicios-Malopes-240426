import { useState } from 'react';

export default function Ex1() {
  const [mostrar, setMostrar] = useState(false);

  const textos = [
    'React JS',
    'JavaScript',
    'HTML',
    'CSS',
    'Componente',
    'Estado',
    'Evento',
    'Interface',
    'Aplicativo Web',
    'Lista de Exercícios'
  ];

  return (
    <div>
      <h2>Ex1 - Mostrar 10 strings em tamanhos diferentes</h2>
      <p>Clique no botão para apresentar 10 strings na tela do navegador.</p>

      <button className="botao" onClick={() => setMostrar(true)}>
        Mostrar strings
      </button>

      {mostrar && (
        <div className="resultado">
          {textos.map((texto, indice) => (
            <p key={texto} style={{ fontSize: `${14 + indice * 3}px` }}>
              {indice + 1}. {texto}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
