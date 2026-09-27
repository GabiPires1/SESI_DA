var alunos = JSON.parse(localStorage.getItem("alunos")) || [];

function mostrarAlunos() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (var i = 0; i < alunos.length; i++) {
        lista.innerHTML += `
            <tr>
                <td>${alunos[i].nome}</td>
                <td>${alunos[i].media}</td>
                <td>${alunos[i].situacao}</td>
                <td>
                    <button onclick="excluirAluno(${i})">Excluir</button>
                </td>
            </tr>
        `;
    }
}

document.getElementById("formulario").onsubmit = function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("As notas devem estar entre 0 e 10!");
        return;
    }

    var media = (nota1 + nota2) / 2;
    var situacao;

    if (media >= 6) {
        situacao = "Aprovado";
    } else {
        situacao = "Reprovado";
    }

    alunos.push({
        nome: nome,
        media: media.toFixed(1),
        situacao: situacao
    });

    localStorage.setItem("alunos", JSON.stringify(alunos));

    mostrarAlunos();
    document.getElementById("formulario").reset();
};

function excluirAluno(indice) {
    alunos.splice(indice, 1);

    localStorage.setItem("alunos", JSON.stringify(alunos));

    mostrarAlunos();
}

mostrarAlunos();