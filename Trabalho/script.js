
function calcular() {
    for (var i = 0; i < 8; i++) {
        var nota1 = Number(document.getElementById("n" + (i * 2 + 1)).value);
        var nota2 = Number(document.getElementById("n" + (i * 2 + 2)).value);

        if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
            alert("As notas devem estar entre 0 e 10!");
            return;
        }

        var media = (nota1 + nota2) / 2;

        document.getElementById("m" + i).innerHTML = media.toFixed(1);

        if (media >= 6) {
            document.getElementById("s" + i).innerHTML = "Aprovado";
            document.getElementById("s" + i).style.color = "green";
        } else {
            document.getElementById("s" + i).innerHTML = "Reprovado";
            document.getElementById("s" + i).style.color = "red";
        }
    }
}