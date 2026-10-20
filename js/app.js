const cardsElement = document.querySelectorAll('.card')
const heartCountElement = document.querySelector('.heart-count')
const startButtonElement = document.querySelector('#startTimerButton')
const timerElement = document.querySelector('#timerDisplay')
const losePopupElement = document.querySelector('#lose-popup')
const winPopupElement = document.querySelector('#win-popup')
const playAgainElement = document.querySelectorAll('.play-again-btn')


let flippedCards = []
let boardLocker = true
let MatchedCards = []
let heart = 0
let time = 60
let winner = false
let loser = false




cardsElement.forEach(function (card) {
    card.addEventListener('click', function () {
        if (boardLocker === true) {
            return
        }
        if (MatchedCards.includes(card)) {
            return
        }
        if (flippedCards.includes(card)) {
            return
        }
        card.classList.toggle('flipped')
        if (card.classList.contains('flipped')) {
            flippedCards.push(card)
            console.log('flipped cards ' + flippedCards.length)
        }


        console.log(flippedCards.length)
        if (flippedCards.length === 2) {
            boardLocker = true
            checkForMatch()
            lose()
            win()
        }


    })

})

// 2. Create a new Audio object and pass the path to your audio file
// Replace the URL below with your local file path (e.g., 'sounds/click.mp3')
const backgroundMusic = new Audio('audio/Temple.mp3');
const matchSound = new Audio('audio/collecting points.mp3');
const misMatchSound = new Audio('audio/goat-screaming-cult-of-the-lamb.mp3');
const winningSound = new Audio('audio/you won.mp3');
const losingSound = new Audio('audio/negative_beeps.mp3');


startButtonElement.addEventListener('click', () => {
    // Rewind the audio to the beginning in case it's already playing
    backgroundMusic.currentTime = 0;

    // Play the audio file
    backgroundMusic.play();
});






function checkForMatch() {
    const firstCard = flippedCards[0]
    const secondCard = flippedCards[1]

    if (firstCard.classList.contains('witch') && secondCard.classList.contains('witch') && firstCard.classList.contains('20') && secondCard.classList.contains('20')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        matchSound.play()
        heart += 20
        heartCountElement.textContent = heart
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)

        resetTurn()


    }


    else if (firstCard.classList.contains('crystal') && secondCard.classList.contains('crystal') && firstCard.classList.contains('20') && secondCard.classList.contains('20')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        matchSound.play()
        heart += 20
        heartCountElement.textContent = heart
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)

        resetTurn()


    }

    else if (firstCard.classList.contains('frog') && secondCard.classList.contains('frog') && firstCard.classList.contains('20') && secondCard.classList.contains('20')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        matchSound.play()
        heart += 20
        heartCountElement.textContent = heart
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)

        resetTurn()


    }

    else if (firstCard.classList.contains('skull') && secondCard.classList.contains('skull') && firstCard.classList.contains('20') && secondCard.classList.contains('20')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        matchSound.play()
        heart += 20
        heartCountElement.textContent = heart
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)

        resetTurn()


    }

    else if (firstCard.classList.contains('rainbow') && secondCard.classList.contains('rainbow') && firstCard.classList.contains('20') && secondCard.classList.contains('20')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        matchSound.play()
        heart += 20
        heartCountElement.textContent = heart
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)

        resetTurn()

    }

    else if (firstCard.classList.contains('unicorn') && secondCard.classList.contains('unicorn') && firstCard.classList.contains('23') && secondCard.classList.contains('23')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        matchSound.play()
        heart += 23
        heartCountElement.textContent = heart
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)

        resetTurn()



    }

    else if (firstCard.classList.contains('boy') && secondCard.classList.contains('boy') && firstCard.classList.contains('25') && secondCard.classList.contains('25')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        matchSound.play()
        heart += 25
        heartCountElement.textContent = heart
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)

        resetTurn()


    }

    else if (firstCard.classList.contains('bread') && secondCard.classList.contains('bread') && firstCard.classList.contains('20') && secondCard.classList.contains('20')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        matchSound.play()
        heart += 20
        heartCountElement.textContent = heart
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)

        resetTurn()


    }

    else if (firstCard.classList.contains('gain') && secondCard.classList.contains('gain') && firstCard.classList.contains('50') && secondCard.classList.contains('50')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        matchSound.play()
        heart = heart + (heart * 0.5)
        heartCountElement.textContent = heart
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)


        resetTurn()


    }

    else if (firstCard.classList.contains('lose') && secondCard.classList.contains('lose') && firstCard.classList.contains('-50') && secondCard.classList.contains('-50')) {
        boardLocker = true
        MatchedCards.push(firstCard)
        MatchedCards.push(secondCard)
        flippedCards = []
        matchSound.play()
        heart = heart - (heart * 0.5)
        heartCountElement.textContent = heart
        console.log("The Cards Match")
        console.log(flippedCards)
        console.log(MatchedCards)
        console.log('heartssss' + heart)

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
        boardLocker = false
        flippedCards = []
        heart = heart - 5
        heartCountElement.textContent = heart
        misMatchSound.play();

        if (MatchedCards.length < 2) {
            heart = 0
            heartCountElement.textContent = heart
        }
        console.log("The Cards Do Not Match")

    }, 1000)


}


function resetTurn() {

    flippedCards = []
    boardLocker = false

}


function resetGame() {
    winPopupElement.style.display = 'none'
    losePopupElement.style.display = 'none'

    backgroundMusic.pause()
    backgroundMusic.currentTime = 0
    flippedCards = []
    boardLocker = true
    MatchedCards = []
    heart = 0
    time = 60
    heartCountElement.textContent = heart
    timerElement.textContent = `Time: ${time}`
    cardsElement.forEach(function (card) {
        card.classList.remove('flipped')


    })


    shuffleCards()

}



function win() {
    if (MatchedCards.length === 20 || heart >= 200) {
        boardLocker = true
        winner = true
        loser = false
        backgroundMusic.pause()
        winningSound.play()
        setTimeout(() => {
            winPopupElement.style.display = 'flex'
        }, 1000)

    }
}

function lose() {
    if (heart <= 0) {
        boardLocker = true
        loser = true
        winner = false
        backgroundMusic.pause()
        misMatchSound.pause()
        losingSound.play()

        setTimeout(() => {
            losePopupElement.style.display = 'flex'
        }, 1000)
    }
}

function shuffleCards() {
    cardsElement.forEach((card) => {
        card.style.order = Math.floor(Math.random() * cardsElement.length)
    })
}

function startTime() {
    const intervalId = setInterval(() => {
        boardLocker = false

        if (time === 0) {
            clearInterval(intervalId)
            losePopupElement.style.display = 'flex'
            boardLocker = true
            sound.pause()
            sound.currentTime = 0
            return
        }
        if (losePopupElement.style.display === 'flex') {
            clearInterval(intervalId)
            boardLocker = true
            sound.pause()
            sound.currentTime = 0

        }

        if (winPopupElement.style.display === 'flex') {
            clearInterval(intervalId)
            boardLocker = true
            sound.pause()
            sound.currentTime = 0


        }



        time--
        timerElement.textContent = `Time: ${time}`

    }, 1000)
}

shuffleCards()

startButtonElement.addEventListener('click', startTime)
playAgainElement.forEach((btn) => { btn.addEventListener('click', resetGame) })