// const nome = localStorage.getItem('nome');

// alert(nome);

// localStorage.setItem("nome", "Alana");

// alert(localStorage.getItem("nome"));

// localStorage.removeItem("nome");

function login() {
    //acessar o valor digitado nos campos usuario e senha
    const local_usuario = localStorage.getItem("usuario");
    const local_senha = localStorage.getItem("senha");


    const campo_usuario = document.getElementById("usuario").value;
    const campo_senha = document.getElementById("senha").value;


    // alert( valor_usuario.value + " " + valor_senha.value);

    if (campo_usuario == local_usuario && campo_senha == local_senha){
        alert("Usuario e senha corretos");
    }else{
        alert("usuario e senha incorretos");
    }


    //validar se os valores sao iguais aos valores armazenados no localStorage    
}

function cadastro(){
    //carregar os campos de cadastro
    //nome, usuario, senha, palavra passe

    //cadastrar os dados dentro do localStorage
    // localStorage.setItem(nomedocampo, valor(valor que vc carregou do campo que o usuario digitou))

    //redirecionar para tela de login

}

function recuperar_senha(){
    //carregar valores dos campos nome, palavra-passe

    //buscar no localstorage os valores de nome, palavra passe

    //comparar se os campos carrgados em tela sao compativeis com os valores armazenados em localstorage
    //se for igual, exibir a senha em um alert
    //se nao, notificar o usuario em um alert que os dados nao sao compativeis, alem disso, limpar os inputs

    //desafio: voces devem implementar um controle de tentativas de recuperar a senha
    //regras: voces devem validar a quantidade de erros de nome, senha.
    //quando o usuario errar 3 vezes, voces devem bloquear os campos(inputs), e nao deixar o usuario tetar uma nova tentativa de solicitação de recuperação  de senha
    //lembrando que voce deve salvar a quantidadde de erros em localstorage
}