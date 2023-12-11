'use strict';

const container = document.querySelector('.container');
const gridDimensions = document.querySelectorAll('.grid-dimensions');
let gridElement;
let gridElements;

let userInput;

const clearGrid = document.querySelector('.clear');
const newGrid = document.querySelector('.new');
const randomColors = document.querySelector('.random-colors');
const eraser = document.querySelector('.eraser');

 






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
    makeSketchEffect();






}


createGrid(16);




function makeSketchEffect() {
    gridElements.forEach(squareDiv => {
        squareDiv.addEventListener('mouseover', function() {
            squareDiv.style.backgroundColor = 'black';
        })
    })

}



//Clear all sketch effects

clearGrid.addEventListener('click', function() {
    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].style.backgroundColor = 'white';
    }
})

// a function that deletes the grid

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
    gridElements.forEach(squareDiv => {
        squareDiv.addEventListener('mouseover', function() {
            squareDiv.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
        })
    })
}) 



eraser.addEventListener('click', function() {

    
    gridElements.forEach(squareDiv => {
        squareDiv.addEventListener('mouseover', function() {
        
        squareDiv.style.backgroundColor = 'white';
 
         

            
       

    
          
            
           
        })
        
        
      
    }) 





  
    
})
















