// Exemplo de script JavaScript

// Função para exibir uma mensagem de boas-vindas
function exibirMensagem() {
    alert("Bem-vindo ao site do Shampoo REFLEG Blend Oil's!");
}

// Função para validar um formulário de contato
function validarFormulario() {
    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verificar se os campos estão preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return false; // Impedir o envio do formulário se algum campo estiver vazio
    } else {
        alert("O formulário foi enviado com sucesso!");
        return true; // Permitir o envio do formulário se todos os campos estiverem preenchidos
    }
}
