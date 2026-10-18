
const cardsElement = document.querySelectorAll('.card')
const scoreElement = document.querySelector('#score')

let flippedCards = []
let boardLocker = false
let MatchedCards = []
let hearts = 0

cardsElement.forEach(function (card) {
    card.addEventListener('click', function () {
        if (boardLocker === true) {
            return
        }
        if (MatchedCards.includes(card)) {
            return
        }
        card.classList.toggle('flipped')
        flippedCards.push(card)
        console.log(flippedCards.length)
        if (flippedCards.length === 2) {
            boardLocker = true
            checkForMatch()
        }
    })
})


//function checkForMatch() {

//Match()



//}

function checkForMatch() {
    const firstCard = flippedCards[0]
    const secondCard = flippedCards[1]
    
    if (firstCard.classList.contains('witch') && secondCard.classList.contains('witch') && firstCard.classList.contains('20') && secondCard.classList.contains('20')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        //heart = 20
        //heart += 
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)
        countHearts()
        resetTurn()

    }


    else if (firstCard.classList.contains('crystal') && secondCard.classList.contains('crystal')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)
        //heart += 
        countHearts()
        resetTurn()

    }

    else if (firstCard.classList.contains('frog') && secondCard.classList.contains('frog')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)
        //heart += 
        countHearts()
        resetTurn()

    }

    else if (firstCard.classList.contains('skull') && secondCard.classList.contains('skull')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)
        //heart += 
        countHearts()
        resetTurn()

    }

    else if (firstCard.classList.contains('rainbow') && secondCard.classList.contains('rainbow')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)
        //heart += 
        countHearts()
        resetTurn()

    }

    else if (firstCard.classList.contains('unicorn') && secondCard.classList.contains('unicorn')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)
        //heart += 
        countHearts()
        resetTurn()

    }

    else if (firstCard.classList.contains('boy') && secondCard.classList.contains('boy')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)
        //heart += 
        countHearts()
        resetTurn()

    }

    else if (firstCard.classList.contains('bread') && secondCard.classList.contains('bread')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)
        //heart += 
        countHearts()
        resetTurn()

    }

    else if (firstCard.classList.contains('gain') && secondCard.classList.contains('gain')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)
        //heart += 
        countHearts()
        resetTurn()

    }

    else if (firstCard.classList.contains('lose') && secondCard.classList.contains('lose')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)
        //heart += 
        countHearts()
        resetTurn()

    }

    else {
        checkForMismatch()
    }


}

function checkForMismatch() {
    setTimeout(function () {
        flippedCards[0].classList.remove("flipped")
        flippedCards[1].classList.remove("flipped")
        console.log("The Cards Do Not Match")
        flippedCards = []
        boardLocker = false
    }, 1000)
}


function resetTurn() {
    flippedCards = []
    boardLocker = false

}


function countHearts() {


}








