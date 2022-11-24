function Salvar() {
    let nome = document.getElementById("nome").value
    let sobrenome= document.getElementById("sobrenome").value
    let emal = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confirmesenha = document.getElementById("confirmesenha").value
    let linha = "<tr><td>" + nome + "</td><td>" + sobrenome + "</td><tr>" + emal + "</tr><td>"
    "<tr><td>" + senha + "</td><td>" + confirmesenha + "</td><tr>" + data + "</tr><td>"
    documen.getElementById("cliente").innerHTML += linha

}   

