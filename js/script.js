const userInput = document.getElementById("userInput");
const countdown = document.getElementById("countdown");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

let selectedNumber = 0;

userInput.addEventListener("change", (e) => (selectedNumber = e.target.value));

const printCountdown = () => {
    let count = 5;
    setInterval(() => {
        if (count >= 0) {
            countdown.innerHTML = `<p class="red">Cuenta atrás: ${count} segundos</p>`
            count--
        }
    }, 1000);
};


const startGame = () => {
    printCountdown();
    const correctNumber = new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 3) + 1
            resolve(randomNumber)
        }, 6000);
    })
    return correctNumber
}

const printResult = (correctNumber) => {
    const isMatchNumber = correctNumber == selectedNumber
    if (isMatchNumber) {
        result.innerHTML = `<p class="green">Enhorabuena, has salvado el mundo!!! 👑</p>
        <p> Tu numero ${selectedNumber} es igual a ${correctNumber}</p>
    `
    } else {
        result.innerHTML = `<p class="red">La bomba ha estallado!!! ;(</p>
        <p> Tu numero ${selectedNumber} no es igual a ${correctNumber}</p>
    `
    }
}

startGame().then((correctNumber) => printResult(correctNumber))

restart.addEventListener("click", () => location.reload())