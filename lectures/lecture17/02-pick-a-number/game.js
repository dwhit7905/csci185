function generateRandomNumber(low, high) {
    const range = high - low + 1;
    const num = Math.floor(Math.random() * range) + low;
    return num;
}

const secret = generateRandomNumber(1, 100);
console.log(secret);

let numGuesses = 0;

// Your task:
function check() {
    // your code here
    const guess = Number(document.querySelector("#guess").value);
    const messageEl = document.querySelector("#message");
    const numGuessesEl = document.querySelector("#num_guesses");


    if (guess > secret) {
        messageEl.innerHTML = ("Too high");
    }

    if (guess < secret) {
        messageEl.innerHTML = ("Too low");
    }

    if (guess === secret) {
        messageEl.innerHTML = ("You win!");
    }

    numGuesses = numGuesses + 1;
    numGuessesEl.innerHTML = numGuesses;
}
