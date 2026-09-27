
var alunos = JSON.parse(localStorage.getItem("alunos")) || [];

var formulario = document.getElementById("formulario");
var tabela = document.getElementById("tabela");
var busca = document.getElementById("busca");
var resumo = document.getElementById("resumo");

// Salvar os dados
function salvarDados() {
    localStorage.setItem("alunos", JSON.stringify(alunos));
}

// Calcular a média
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Verificar a situação do aluno
function verificarSituacao(media) {
    if (media >= 6) {
        return "Aprovado";
    } else if (media >= 4) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

// Mostrar os alunos na tabela
function mostrarAlunos() {
    tabela.innerHTML = "";

    var termo = busca.value.toLowerCase();
    var quantidadeAprovados = 0;
    var somaMedias = 0;
    var quantidadeMostrada = 0;

    alunos.forEach(function(aluno, indice) {
        var nome = aluno.nome.toLowerCase();
        var materia = aluno.materia.toLowerCase();

        if (nome.includes(termo) || materia.includes(termo)) {
            var media = calcularMedia(aluno.nota1, aluno.nota2);
            var situacao = verificarSituacao(media);

            var linha = document.createElement("tr");

            linha.innerHTML =
                "<td>" + aluno.nome + "</td>" +
                "<td>" + aluno.materia + "</td>" +
                "<td>" + aluno.nota1.toFixed(1) + "</td>" +
                "<td>" + aluno.nota2.toFixed(1) + "</td>" +
                "<td>" + media.toFixed(1) + "</td>" +
                "<td>" + situacao + "</td>" +
                '<td><button type="button" onclick="excluirAluno(' + indice + ')">Excluir</button></td>';

            tabela.appendChild(linha);
            quantidadeMostrada++;
        }

        var mediaAluno = calcularMedia(aluno.nota1, aluno.nota2);
        somaMedias += mediaAluno;

        if (mediaAluno >= 6) {
            quantidadeAprovados++;
        }
    });

    if (alunos.length === 0) {
        tabela.innerHTML = '<tr><td colspan="7">Nenhuma nota cadastrada.</td></tr>';
    }

    var mediaGeral = 0;

    if (alunos.length > 0) {
        mediaGeral = somaMedias / alunos.length;
    }

    resumo.textContent =
        "Total de registros: " + alunos.length +
        " | Média geral: " + (alunos.length > 0 ? mediaGeral.toFixed(1) : "—") +
        " | Aprovados: " + quantidadeAprovados +
        " | Resultados exibidos: " + quantidadeMostrada;
}

// Cadastrar aluno
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    var nome = document.getElementById("nome").value.trim();
    var materia = document.getElementById("materia").value.trim();
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);

    if (nome === "" || materia === "") {
        alert("Preencha o nome e a matéria.");
    } else if (
        document.getElementById("nota1").value === "" ||
        document.getElementById("nota2").value === "" ||
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10
    ) {
        alert("As notas devem ser de 0 a 10.");
    } else {
        alunos.push({
            nome: nome,
            materia: materia,
            nota1: nota1,
            nota2: nota2
        });

        salvarDados();
        mostrarAlunos();
        formulario.reset();
    }
});

// Excluir aluno
function excluirAluno(indice) {
    if (confirm("Deseja excluir este registro?")) {
        alunos.splice(indice, 1);
        salvarDados();
        mostrarAlunos();
    }
}

// Buscar alunos
busca.addEventListener("input", mostrarAlunos);

// Apagar todos os registros
document.getElementById("apagarTudo").addEventListener("click", function() {
    if (confirm("Deseja apagar todos os registros?")) {
        alunos = [];
        salvarDados();
        mostrarAlunos();
    }
});

// Mostrar os dados ao abrir a página
mostrarAlunos();