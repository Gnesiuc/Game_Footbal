const caunt = document.querySelector(".caunt")
const scoreResult = document.querySelector(".scoreResult")
const container = document.querySelector(".container")
const left = document.querySelector(".left")
const tag_scoreLeft = document.querySelector(".scoreLeft")
const tag_scoreRight = document.querySelector(".scoreRight")
const tag_cauntShotsRight = document.querySelector(".cauntShotsRight")
const tag_cauntShotsLeft = document.querySelector(".cauntShotsLeft")

const ball = document.createElement("div")
ball.className = "ball"

const goalkeeperLeft = document.createElement("div")
goalkeeperLeft.className = "goalkeeper goalkeeperLeft"

const goalkeeperRight = document.createElement("div")
goalkeeperRight.className = "goalkeeper goalkeeperRight"

container.append(ball,goalkeeperLeft,goalkeeperRight)

// console.log(container);
// console.log(container.scrollHeight);
// console.log(container.scrollWidth);


const windowHeight = container.scrollHeight - left.scrollWidth
const windowWidth = container.scrollWidth - left.scrollWidth


let cauntUser = 0
let scoreRight = 0
let scoreLeft = 0
let cauntShotsRight = 0
let cauntShotsLeft = 0

const tag_ball = document.querySelector(".ball")

tag_ball.addEventListener("click", (item) =>{
    
    const randomHeight = Math.floor(Math.random() * windowHeight )
    console.log(randomHeight);

    const randomWidth = Math.floor(Math.random() * windowWidth )
    console.log(randomWidth);

    ball.style.marginLeft = randomWidth + "px"
    ball.style.marginTop = randomHeight + "px"

    goalkeeperLeft.style.marginTop = randomHeight + "px"
    goalkeeperRight.style.marginTop = randomHeight + "px"

    cauntUser++
    caunt.innerHTML= `The number of shots:${cauntUser}`
    console.log(cauntUser);

    ball.style.transform = `rotate(${randomWidth}deg)`

    if(randomWidth <= 80 ) {
        tag_scoreLeft.innerHTML = ++scoreLeft
        scoreResult.innerHTML =  `Left ${scoreRight}:${scoreLeft} Right`
        cauntShotsRight += cauntUser
        tag_cauntShotsRight.innerHTML = cauntShotsRight
        alert(`football team Right scored a goal 1   The outcome: ${scoreResult.innerHTML}`)
        cauntUser = 0
        gameWin()

    } 

    if(randomWidth >= 1380) {
        tag_scoreRight.innerHTML = ++scoreRight
        scoreResult.innerHTML =  `Left ${scoreRight}:${scoreLeft} Right`
        cauntShotsLeft += cauntUser
        tag_cauntShotsLeft.innerHTML = cauntShotsLeft
        alert(`football teamLeft scored a goal 1   The outcome: ${scoreResult.innerHTML}`)
        cauntUser = 0
        gameWin()

    }
})

function resetAll() {
ball.style.marginLeft = "725px"
ball.style.marginTop = "425px"
scoreResult.innerHTML = "Left 0:0 Right"
cauntUser = 0
scoreRight = 0
scoreLeft = 0
cauntShotsRight = 0
cauntShotsLeft = 0
tag_scoreRight.innerHTML = 0
tag_scoreLeft.innerHTML = 0
tag_cauntShotsRight.innerHTML = 0
tag_cauntShotsLeft.innerHTML = 0
goalkeeperLeft.style.marginTop = "425px"
goalkeeperRight.style.marginTop = "425px"
caunt.innerHTML = "The number of shots: 0"
ball.style.transform = `rotate(${0}deg)`

}

function gameWin() {
    if(scoreRight == 2 ) {
        alert(`The Left football team won the match with ${scoreRight}:${scoreLeft}`)
        resetAll()
    }

    if(scoreLeft == 2 ) {
        alert(`The Right football team won the match with ${scoreLeft}:${scoreRight}`)
        resetAll()
    }
}

