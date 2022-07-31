const diceButton = document.querySelector(".diceButton")
const header = document.querySelector(".header")
const adviceText = document.querySelector(".adviceText")
const adviceUrl = "https://api.adviceslip.com/advice"
const player = document.querySelector(".player")

let f = false;

diceButton.addEventListener("click", async () => {
    const res = await fetch(adviceUrl)
    const data = await res.json()
    changeAdvice(data)
    speechSynthesis.cancel()
    player.dataset.status = "play"
})

const changeAdvice = (result) => {
    header.textContent = `Advice #${result.slip.id}`
    adviceText.textContent = `"${result.slip.advice}"`
}

player.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(adviceText.textContent)
    if(player.dataset.status === "play"){
        player.dataset.status = "pause"
        f === true ? speechSynthesis.resume() : f = false
        speechSynthesis.speak(utterance)
    }
    else if(player.dataset.status === "pause"){
        player.dataset.status = "play"
        speechSynthesis.pause()
        f = true
    }
})