// const nome = localStorage.getItem('nome');

// alert(nome);

// localStorage.setItem("nome", "Frederico");

// alert(localStorage.getItem("nome"));

// localStorage.removeItem("nome");

function login(){
    //Acessar o valor digitado nos campos USUARIO e SENHA
    const campo_usuario = document.getElementById("usuario");
    const campo_senha = document.getElementById("senha");

    // carregar os valorer do localStorange
    const local_usuario = localStorage.getItem("usuario");
    const local_senha =localStorage.getItem("senha");

    //Validar se o valores sao iguais aos valores armazenados no localStorage
    if (campo_usuario == local_usuario && campo_senha == local_senha){
        alert ("Login realizado com sucesso!")
    }else{
        alert("Usuario ou senha invalios!");
    }
    
}




function cadastro(){
    // 1 Carregar os campos de cdastro 
    // NOME, USUARIO, SENHA, PALAVRA PASSE


    // 2 Cadastrar os dados dentro do loalStorange
    // Ex: localStorage.setItem("NOME", valor (OBS: VALOR QUE VOCÊ carregou no passo 1))

    // 3 Redirecionar para tela de login


    
}
function recuperar_senha(){
    // 1 Carregar valores de campo NOME, PALAVRA PASSE

    // 2 Buscar no loalStorange os valores  
}