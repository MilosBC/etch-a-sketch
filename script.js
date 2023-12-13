'use strict';

const container = document.querySelector('.container');
const gridDimensions = document.querySelectorAll('.grid-dimensions');
let gridElement;
let gridElements;

let userInput;

const clearGrid = document.querySelector('.clear');
const newGrid = document.querySelector('.new');
const randomColors = document.querySelector('.random-colors');
const defaultColor = document.querySelector('.default');
const eraser = document.querySelector('.eraser');
const toggleBorder = document.querySelector('.toggle-border');


function createGrid(num) {
    for (let i = 0; i < num * num; i++) {
         gridElement = document.createElement('div');
            gridElement.classList.add('grid-element');

            gridElement.style.width = `${480 / num}px`; 
            
            container.appendChild(gridElement);   
    }

     for (let i = 0; i < gridDimensions.length; i++) {
        gridDimensions[i].textContent = `${num}`;
        
    } 

    gridElements = document.querySelectorAll('.grid-element'); // a nodelist of all grid elements
    setColor('black');

}


createGrid(16);

function setColor(color) {
    gridElements.forEach(squareDiv => {
        squareDiv.addEventListener('mouseover', function() {

        if (color === 'white' || color === 'black') {
        
        squareDiv.style.backgroundColor = color; 

    } else {
        squareDiv.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
    }
           
        })
        
        
      
    })  
}



clearGrid.addEventListener('click', function() {
    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].style.backgroundColor = 'white';
    }
})



function deleteGrid() {
    for (let i = 0; i < gridElements.length; i++) {
        container.removeChild(gridElements[i]);
    }


}

newGrid.addEventListener('click', function() {

    userInput = Number(prompt(`How many squares per side do you want in the new grid? (maximum allowed number is 100)`));

    if (!userInput || userInput <= 0 || userInput > 100) {
        alert(`Please enter a valid input!`);
    } else {
        deleteGrid();
        createGrid(userInput);
       
        
    }
    
    
})

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 256);
    return randomNumber;
}

randomColors.addEventListener('click', function() {
   setColor('random'); //just a placeholder string value that is meant to trigger the "else" statement in the setColor function.

   

    
}) 

eraser.addEventListener('click', function() {

    
  setColor('white');
})

defaultColor.addEventListener('click', function() {
setColor('black');
    
}) 

toggleBorder.addEventListener('click', function() {

    for (let i = 0; i < gridElements.length; i ++) {
        gridElements[i].classList.toggle('hide-border');
    }

})
















