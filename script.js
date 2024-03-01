const mainDiv = document.createElement('div')
mainDiv.setAttribute('id', "main-container")
const body = document.querySelector('body')
body.appendChild(mainDiv)

for (let i=0; i<256; i++) {
    const squares = document.createElement('div')
    squares.setAttribute('class', 'squares')
    mainDiv.appendChild(squares)

}


const hoverSquares = document.querySelectorAll('.squares')
hoverSquares.forEach(square => {
    square.addEventListener("mousemove", () => {
        square.style.backgroundColor = "red"
    })
    
})

const btn = document.createElement('button')
btn.textContent = "ALERT ME"
body.insertBefore(btn, mainDiv)

btn.addEventListener('click', () => {
    const gridNum = prompt('enter the number of grids')
    console.log(gridNum)
})

