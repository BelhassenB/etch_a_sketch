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


function newGrid (){
    btn.addEventListener('click', () => {
    let gridNum = prompt('Enter the number of grids (MAX 100)', "");
    const width = 700;
    const height = 500;

    while (mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.firstChild)
    }       
     
    for (let i=0; i<(gridNum*gridNum); i++) {        
        const createGrid = document.createElement('div')
        createGrid.setAttribute("class", "squares") 
        mainDiv.appendChild(createGrid)
        createGrid.style.width = width/gridNum
        createGrid.style.height = height/gridNum
        
    while (isNaN(gridNum) || gridNum > 100) {
        gridNum = prompt('Only numbers less than 100 are accepted', "");
    }}   
    
    

})}
console.log(newGrid())

