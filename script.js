const mainDiv = document.createElement('div')
mainDiv.setAttribute('id', "main-container")
const body = document.querySelector('body')
body.appendChild(mainDiv)




const firstGrid = () => {for (let i=0; i<256; i++) {
    const squares = document.createElement('div')
    squares.setAttribute('class', 'squares')
    mainDiv.appendChild(squares)
   

}}
firstGrid()
const hoverSquares = document.querySelectorAll('.squares')



function hovering (container){    
    container.forEach(square => {
    const rgbRed = Math.floor(Math.random()*255)
    const rgbGreen = Math.floor(Math.random()*255)
    const rgbBlue = Math.floor(Math.random()*255)
    
    square.addEventListener("mousemove", () => {
        square.style.backgroundColor = `rgb(${rgbRed},${rgbGreen},${rgbBlue})`
    })
    
})}
hovering(hoverSquares)


const btn = document.createElement('button')
btn.textContent = "Change Grid"
btn.style.fontWeight = "bold"
btn.style.fontSize = "18px"
btn.style.width = "max-content"
body.insertBefore(btn, mainDiv)

// const resetBtn = document.createElement('button')
// body.appendChild(resetBtn)
// resetBtn.textContent = "Reset"
// resetBtn.style.fontWeight = "bold"
// resetBtn.style.fontSize = "18px"
// resetBtn.style.width = "max-content"
// resetBtn.addEventListener("click", () => {
    
// body.replaceChild(body.children[1], mainDiv)})



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
        createGrid.setAttribute("class", "new-squares") 
        mainDiv.appendChild(createGrid)
            
        createGrid.style.boxSizing = "border-box"
        createGrid.style.border = "1px white solid"
        createGrid.style.width = width/gridNum + "px"
        createGrid.style.height = height/gridNum + "px"
        createGrid.style.flexGrow = "1"
        createGrid.style.borderRadius = "20px"
        createGrid.style.border = "1px white solid"      
            
    }
    

    while (isNaN(gridNum) || gridNum > 100) {
        gridNum = prompt('Only numbers less than 100 are accepted', "");
    }
    const hoverNewDivs = document.querySelectorAll('.new-squares')  
    hovering(hoverNewDivs)
    

})}
newGrid()