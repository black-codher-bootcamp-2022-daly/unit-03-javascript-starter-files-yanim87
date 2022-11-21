const randomButton = document.querySectory(".random-button");

const names =["Yetunde", "Tara", "Ikraan", "Monique"];
const points =[1,3,5,7,9,2,3,3435,4,0,.5, 100000];

function randomize(items) {
    return items [Math.floor(Math.randon() * items.length)];
}

function putNameOnPage(name) {
    const title = document.querySelector('.winner')
    titleTag.textContent = name

}

function handleClick () {
    const randomName = randomize(names)
    putNameOnPage (randomName)
}


function addPointsToPage (points) {
    const pointTag  = document.querySelector('.points')
    pointTag.textContent = point 
}

randomButton.onclick = handleClick
    const randomName = document.querySelector(".random-button");



    function handleClick() {
        if(alreadyWon)

        const group = document.querySelector(".winner")
        const points = document.querySelector(".points")
        group.innerText = ""
        points.innerText = ""
        const alreadyWon = document.querySelector(".winnerTag")
        alreadyWon.remove()
        return

    }

const randomName = randomize(names)
const randomPoint = randomize(points)
console.log('click', {randomPoint, randomName});-

function winnerTag() {
const winnerTag = document.createElement(h2)
winnerTag.textContent = "You are a winner"
}

document.body.appendChild(winnerTag)

