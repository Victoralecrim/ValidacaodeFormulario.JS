/* Criação da função de validação do formulario*/

function validate(){
  
    //pegando o valor do nome pelo name
    const nome = document.getElementById("nome");
    //pegando o id de sobrenome
    const sobrenome = document.getElementById("sobrenome");
    //pegando o id de email
    const email = document.getElementById("email");
    //mesma logica com os outros 
    const senha = document.getElementById("senha");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const sexo = document.getElementById("sexo");
    const newsletter = document.getElementById("newsletter").checked;

    //Verificar se o campo de nome esta vazio
    if(nome.value == ""){
        alert("Campo de nome vazio, por favor informe um nome!");    
        //Deixa o input com foco ao clicar
        nome.focus();
        //retorna a função e ignora as outras linhas
        return; 
    }

    if(sobrenome.value == ""){
        alert("sobrenome não informado!")
        sobrenome.focus();
        return;
    }
    if(email.value == ""){
        alert("email não informado!")
        email.focus();
        return;
    }
    if(senha.value == ""){
        alert("senha não informada!")
        senha.focus();
        return;
    }
    if(telefone.value == ""){
        alert("telefone não informado!")
        telefone.focus();
        return;
    }
    if(cep.value == ""){
        alert("cep não informado!")
        cep.focus();
        return;
    }
    if(sexo.value == ""){
        alert("sexo não selecionado!")
        sexo.focus();
        return;
    } 

   
}


