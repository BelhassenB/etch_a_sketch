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
        square.style.backgroundColor = "yellow"
    })
    
})

const btn = document.createElement('button')
btn.textContent = "ALERT ME"
body.insertBefore(btn, mainDiv)


btn.addEventListener('click', () => {
    let gridNum = prompt('Enter the number of grids (MAX 100)', "");
    while (isNaN(gridNum) || gridNum > 100) {
        gridNum = prompt('Enter the number of grids (MAX 100)', "");
    }
    console.log(`Your number is: ${gridNum}`);
});

