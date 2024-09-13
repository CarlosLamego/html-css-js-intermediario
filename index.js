const botao = document.getElementById('botao');

botao.addEventListener('click', function () {

    verificaCampoNome();
    verificaCampoEmail();
    verificaCampoTelefone();
    VerificaCampoMensagem();

})

function verificaCampoNome() {
    const nomeValidado = document.getElementById('nome').value;
    const campoObrigatorioOn = document.querySelector('.campo-obrigatorio.campo-do-nome')

    if (nomeValidado === "") {
        nome.classList.add('borda-vermelha')
        campoObrigatorioOn.classList.remove('vazio')
    } else {
        nome.classList.add('borda-verde')
        campoObrigatorioOn.classList.add('vazio')
    }
}

function verificaCampoEmail() {
    const emailValidado = document.getElementById('email').value;
    const campoObrigatorioOn = document.querySelector('.campo-obrigatorio.campo-do-email')

    if (emailValidado === "") {
        email.classList.add('borda-vermelha')
        campoObrigatorioOn.classList.remove('vazio')
    } else {
        email.classList.add('borda-verde')
        campoObrigatorioOn.classList.add('vazio')
    }
}

function verificaCampoTelefone() {
    const telefoneValidado = document.getElementById('telefone').value;
    const campoObrigatorioOn = document.querySelector('.campo-obrigatorio.campo-do-telefone')

    if (telefoneValidado === "") {
        telefone.classList.add('borda-vermelha')
        campoObrigatorioOn.classList.remove('vazio')
    } else {
        telefone.classList.add('borda-verde')
        campoObrigatorioOn.classList.add('vazio')
    }
}

function VerificaCampoMensagem() {
    const mensagemValidada = document.getElementById('mensagem').value;
    const campoObrigatorioOn = document.querySelector('.campo-obrigatorio.campo-da-mensagem')

    if (mensagemValidada === "") {
        mensagem.classList.add('borda-vermelha')
        campoObrigatorioOn.classList.remove('vazio')
    } else {
        mensagem.classList.add('borda-verde')
        campoObrigatorioOn.classList.add('vazio')
    }
}