const secretNumber = Math.floor(Math.random() * 15 + 1);

function checkGuess() {
    const secret = document.getElementById("secret").value;
    const result = document.getElementById("result");

    if (!(secret >= 1 && secret <= 15)) {
        result.textContent = "Número inválido.";
        result.style.color = "rgb(172, 19, 83)";

        setTimeout(() => {
            result.textContent = ""
        }, 2000);

        return;
    }

    if (secret == secretNumber) {
        result.textContent = "Você acertou!";
        result.style.color = "rgb(60, 6, 121)";
    } else {
        result.textContent = "Você errou :(";
        result.style.color = "rgb(104, 11, 49)";

        setTimeout(() => {
            result.textContent = ""
        }, 1000);
    }
}