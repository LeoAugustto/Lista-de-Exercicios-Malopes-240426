import { useState } from "react";
import Ex1 from "./exercicios/Ex1.jsx";
import Ex2 from "./exercicios/Ex2.jsx";
import Ex3 from "./exercicios/Ex3.jsx";
import Ex4 from "./exercicios/Ex4.jsx";
import Ex5 from "./exercicios/Ex5.jsx";
import Ex6 from "./exercicios/Ex6.jsx";
import Ex7 from "./exercicios/Ex7.jsx";
import Ex8 from "./exercicios/Ex8.jsx";

const exercicios = [
  { id: 1, titulo: "Ex1 - Strings com tamanhos diferentes", componente: <Ex1 /> },
  { id: 2, titulo: "Ex2 - Tabela com índice e texto", componente: <Ex2 /> },
  { id: 3, titulo: "Ex3 - Validação de formulário", componente: <Ex3 /> },
  { id: 4, titulo: "Ex4 - N-ésimo Fibonacci", componente: <Ex4 /> },
  { id: 5, titulo: "Ex5 - Tabela Fibonacci", componente: <Ex5 /> },
  { id: 6, titulo: "Ex6 - Tabela 4x4 aleatória", componente: <Ex6 /> },
  { id: 7, titulo: "Ex7 - Calculadora básica", componente: <Ex7 /> },
  { id: 8, titulo: "Ex8 - Calculadora completa", componente: <Ex8 /> },
];

export default function App() {
  const [exercicioAtual, setExercicioAtual] = useState(1);
  const exercicioSelecionado = exercicios.find((exercicio) => exercicio.id === exercicioAtual);

  return (
    <main className="app">
      <header className="topo">
        <div>
          <h1>Exercícios React</h1>
          <p>Una Karaíba | Prof. Marcos Lopes | Leonardo Augusto | RA: 202510826 </p>
        </div>
      </header>

      <section className="layout">
        <nav className="menu">
          <h2>Exercícios</h2>
          {exercicios.map((exercicio) => (
            <button key={exercicio.id} className={exercicioAtual === exercicio.id ? "ativo" : ""} onClick={() => setExercicioAtual(exercicio.id)}>
              {exercicio.titulo}
            </button>
          ))}
        </nav>

        <section className="card-principal">{exercicioSelecionado.componente}</section>
      </section>
    </main>
  );
}
