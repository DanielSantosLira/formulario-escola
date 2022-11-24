function Salvar() {
    let nome = document.getElementById("nome").value
    let sobrenome= document.getElementById("sobrenome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confirmesenha = document.getElementById("confirmesenha").value
    let data = document.getElementById("data").value
    let cidade = document.getElementById("cidade").value
    let Est = document.getElementById("tEst").value
   
    let linha = "<tr><td>" + nome + "</td><td>" + sobrenome + "</td><tr>" + email + "</tr><td>"
    "<tr><td>" + senha + "</td><td>" + confirmesenha + "</td><tr>" + data + "</tr><td>"
    "<tr><td>" + cidade + "</td><td>" + Est + "</td><tr>"
    documen.getElementById("cliente").innerHTML += linha

}   

