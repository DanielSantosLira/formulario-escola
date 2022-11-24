function Salvar() {
    let nome = document.getElementById("nome").value
    let Sobrenome= document.getElementById("sobrenome").value
    let emal = document.getElementById("email").value
    let linha = "<tr><td>" + nome + "</td><td>" + sobrenome + "</td><tr>"
    documen.getElementById("cliente").innerHTML += linha

}   

