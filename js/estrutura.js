function Salvar() {
    // Pegando os valores inseridos pelo usuário
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;
    var pais = document.getElementById("paises").value;

    // Verificando se todos os campos foram preenchidos
    if (!nome || !idade || !email || !pais) {
        alert("Por favor, preencha todos os campos antes de salvar.");
        return;
    }

    // Montando a mensagem de confirmação
    let data = 
        `As informações abaixo estão corretas?\n` +
        `Nome: ${nome}\n` +
        `Idade: ${idade}\n` +
        `Email: ${email}\n` +
        `País: ${pais}`;

    // Exibindo a mensagem de confirmação
    if (confirm(data)) {
        alert("Informações salvas com sucesso!");
    } else {
        alert("Operação cancelada.");
    }
}
