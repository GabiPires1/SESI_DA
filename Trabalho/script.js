
var alunos = JSON.parse(localStorage.getItem("alunos")) || [];

function calcular() {
    for (var i = 0; i < 8; i++) {
        var n1 = Number(document.getElementById("n" + (i * 2 + 1)).value);
        var n2 = Number(document.getElementById("n" + (i * 2 + 2)).value);
        var media = (n1 + n2) / 2;

        document.getElementById("m" + i).innerHTML = media.toFixed(1);
        document.getElementById("s" + i).innerHTML =
            media >= 6 ? "Aprovado" : "Reprovado";
    }
}

function salvarAluno() {
    var nome = document.getElementById("nome").value;
    var notas = [];

    if (nome == "") {
        alert("Digite o nome do aluno!");
        return;
    }

    for (var i = 1; i <= 16; i++) {
        var nota = document.getElementById("n" + i).value;

        if (nota == "" || nota < 0 || nota > 10) {
            alert("Preencha todas as notas de 0 a 10!");
            return;
        }

        notas.push(Number(nota));
    }

    var aluno = { nome: nome, notas: notas };
    var indice = alunos.findIndex(a => a.nome.toLowerCase() == nome.toLowerCase());

    if (indice >= 0) {
        alunos[indice] = aluno;
    } else {
        alunos.push(aluno);
    }

    localStorage.setItem("alunos", JSON.stringify(alunos));
    atualizarLista();
    alert("Aluno salvo!");
}

function atualizarLista() {
    var lista = document.getElementById("listaAlunos");
    var selecao = document.getElementById("alunosSalvos");

    lista.innerHTML = "";
    selecao.innerHTML = '<option value="">Selecione um aluno</option>';

    alunos.forEach((aluno, i) => {
        lista.innerHTML += `<tr><td>${aluno.nome}</td>
        <td><button onclick="abrirAluno(${i})">Abrir</button></td></tr>`;

        selecao.innerHTML += `<option value="${i}">${aluno.nome}</option>`;
    });
}

function abrirAluno(i) {
    document.getElementById("nome").value = alunos[i].nome;

    alunos[i].notas.forEach((nota, j) => {
        document.getElementById("n" + (j + 1)).value = nota;
    });

    document.getElementById("alunosSalvos").value = i;
    calcular();
}

function carregarAluno() {
    var i = document.getElementById("alunosSalvos").value;

    if (i !== "") abrirAluno(Number(i));
}

function novoAluno() {
    document.getElementById("nome").value = "";
    document.querySelectorAll('input[type="number"]').forEach(campo => campo.value = "");

    for (var i = 0; i < 8; i++) {
        document.getElementById("m" + i).innerHTML = "-";
        document.getElementById("s" + i).innerHTML = "-";
    }

    document.getElementById("alunosSalvos").value = "";
}

atualizarLista();