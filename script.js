document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let energia = parseFloat(document.getElementById("energia").value);
    let agua = parseFloat(document.getElementById("agua").value);
    let residuos = parseFloat(document.getElementById("residuos").value);

    let pontuacao = 100;

    if (energia > 300) pontuacao -= 30;
    if (agua > 500) pontuacao -= 30;
    if (residuos > 50) pontuacao -= 40;

    let resultado = "";

    if (pontuacao >= 80) {
        resultado = "Excelente nível de sustentabilidade! 🌿";
    } else if (pontuacao >= 50) {
        resultado = "Nível médio. Pode melhorar ♻️";
    } else {
        resultado = "Alto impacto ambiental. Precisa melhorar 🚨";
    }

    document.getElementById("relatorio").innerText =
        "Pontuação: " + pontuacao + " - " + resultado;
});
