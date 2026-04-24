import { useState } from 'react';

export default function Ex3() {
  const [formulario, setFormulario] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    email: ''
  });
  const [mensagens, setMensagens] = useState([]);

  function atualizarCampo(event) {
    const { name, value } = event.target;
    setFormulario((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: value
    }));
  }

  function verificarFormulario(event) {
    event.preventDefault();

    const camposObrigatorios = [
      { chave: 'nome', rotulo: 'Nome' },
      { chave: 'endereco', rotulo: 'Endereço' },
      { chave: 'telefone', rotulo: 'Telefone' },
      { chave: 'email', rotulo: 'Email' }
    ];

    const camposVazios = camposObrigatorios.filter((campo) => formulario[campo.chave].trim() === '');

    if (camposVazios.length === 0) {
      setMensagens([{ tipo: 'sucesso', texto: 'Todos os campos foram preenchidos corretamente.' }]);
      return;
    }

    setMensagens([
      { tipo: 'erro', texto: 'Existem campos obrigatórios sem preenchimento.' },
      ...camposVazios.map((campo) => ({
        tipo: 'erro',
        texto: `O campo ${campo.rotulo} precisa ser preenchido.`
      }))
    ]);
  }

  return (
    <div>
      <h2>Ex3 - Verificar preenchimento do formulário</h2>

      <form className="formulario" onSubmit={verificarFormulario}>
        <label>
          Nome:
          <input name="nome" value={formulario.nome} onChange={atualizarCampo} />
        </label>

        <label>
          Endereço:
          <input name="endereco" value={formulario.endereco} onChange={atualizarCampo} />
        </label>

        <label>
          Telefone:
          <input name="telefone" value={formulario.telefone} onChange={atualizarCampo} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formulario.email} onChange={atualizarCampo} />
        </label>

        <button className="botao" type="submit">Verificar campos</button>
      </form>

      <div className="resultado">
        {mensagens.map((mensagem, indice) => (
          <p key={`${mensagem.texto}-${indice}`} className={`mensagem ${mensagem.tipo}`}>
            {mensagem.texto}
          </p>
        ))}
      </div>
    </div>
  );
}
