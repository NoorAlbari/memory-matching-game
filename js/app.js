
const cardsElement = document.querySelectorAll('.card')
let flippedCards = []
let lockBoard = false
let match = false
let MatchedCards = []

cardsElement.forEach(function (card) {
    card.addEventListener('click', function () {
        if (lockBoard === true) {
            return;
        }
        card.classList.toggle('flipped')
        flippedCards.push(card)
        console.log(flippedCards.length)
        if (flippedCards.length === 2) {
            lockBoard = true
            checkForMatch()
        }
    })
})



function checkForMatch() {

    if (match === true) {
        lockBoard = false
    }
    Match()



}

function Match() {
    const firstCard = flippedCards[0];
    const secondCard = flippedCards[1];
    if (firstCard.classList.contains('heart') && secondCard.classList.contains('heart')) {
        //lockBoard = true
        match = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)

    }

    else {
        Mismatch()
    }

    resetTurn()
}



function Mismatch() {
    setTimeout(function () {
        flippedCards[0].classList.remove("flipped");
        flippedCards[1].classList.remove("flipped");
        console.log("The Cards Do Not Match")
        flippedCards = []
        lockBoard = false
    }, 1000);
}


function resetTurn() {
    flippedCards = []
    lockBoard = false

}








