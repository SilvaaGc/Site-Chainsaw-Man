document.addEventListener('DOMContentLoaded', function () {
  // Botão principal de acessibilidade (estilizado como alavanca de motosserra)
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao'); // Gira como uma engrenagem
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista'); // Exibe opções como lâminas ocultas

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
  });

  // Controles de fonte (como ajustar a potência da motosserra)
  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoAtualFonte = 1;

  aumentaFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  diminuiFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  // Alternância de contraste: modo caçador vs modo demônio
  alternaContraste.addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste');
  });
});
