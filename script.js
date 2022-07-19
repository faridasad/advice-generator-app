const diceButton = document.querySelector(".diceButton")
const header = document.querySelector(".header")
const adviceText = document.querySelector(".adviceText")
const adviceUrl = "https://api.adviceslip.com/advice"

diceButton.addEventListener("click", () => {
    fetch(adviceUrl)
    .then(response => response.json())
    .then(data => changeAdvice(data));
})

const changeAdvice = (result) => {
    header.textContent = `Advice #${result.slip.id}`
    adviceText.textContent = `"${result.slip.advice}"`
}