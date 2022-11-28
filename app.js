function Salvar() {
    let nome = document.getElementById("nome").value
    let sobrenome= document.getElementById("sobrenome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confirmesenha = document.getElementById("confirmesenha").value
    let data = document.getElementById("date").value
    let cidade = document.getElementById("cidade").value
    let Est = document.getElementById("Est").value
    let endereco = document.getElementById("endereco").value
    let tNum = document.getElementById("tNum").value
   
   console.log(nome, sobrenome, email, senha, confirmesenha, data, cidade, Est, endereco, tNum)

    let linha = "<tr><td>" + nome + "</td><td>" + sobrenome +"</td><td>"  + email + "</td><td>" + senha + "</td><td>" + confirmesenha + "</td><td>" + data + "</td><td>"  + endereco + "</td><td>" + tNum + "</td><td>"    + cidade +"</td><td>" + Est + "</td></tr>"
    document.getElementById("cliente").innerHTML += linha 
   document.getElementById("nome" ).value = ""
     document.getElementById("sobrenome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("senha").value = ""
    document.getElementById("confirmesenha").value = ""
    document.getElementById("date").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("Est").value = ""
    document.getElementById("endereco").value = ""
    document.getElementById("tNum").value = ""

}   

