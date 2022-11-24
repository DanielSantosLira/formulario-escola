function Salvar() {
    let nome = document.getElementById("nome").value
    let sobrenome= document.getElementById("sobrenome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confirmesenha = document.getElementById("confirmesenha").value
    let date = document.getElementById("date").value
    let cidade = document.getElementById("cidade").value
    let Est = document.getElementById("Est").value
    let endereco = document.getElementById("endereco").value
    let tNum = document.getElementById("tNum").value
   

   console.loge(nome, sobrenome, email, senha, confirmesenha, date, cidade, Est, endereco, tNum)

    let linha = "<tr><td>" + nome + "</tr><td>" + sobrenome +"</td><tr>"  + email + "</td><td>"
   "<tr><td>" + senha + "</td><td>" + confirmesenha + "</td><td>" + data + "</td><td>"
    "<tr><td>" + cidade + "</td><td>" + Est + "</td><tr>" + endereco + "</td><tr>" + tNum + "</td><td>"
    documen.getElementById("cliente").innerHTML += linha

}   

