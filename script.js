'use strict';

const container = document.querySelector('.container');
const gridDimensions = document.querySelectorAll('.grid-dimensions');
let gridElements;

let userInput;

const clearGrid = document.querySelector('.clear');
const newGrid = document.querySelector('.new');


function createGrid(num) {
    for (let i = 0; i < num * num; i++) {
        const gridElement = document.createElement('div');
            gridElement.classList.add('grid-element');

            gridElement.style.width = `${900 / num}px`;

            gridElement.addEventListener('mousemove', function() {
                this.style.backgroundColor = 'black';
            });
            
            
           
            
            
            container.appendChild(gridElement); 
           
            

        
    }

     for (let i = 0; i < gridDimensions.length; i++) {
        gridDimensions[i].textContent = `${num}`;
        
    } 

    gridElements = document.querySelectorAll('.grid-element');






}


createGrid(16);

// storing all the created divs in a NodeList


/*function makeSketchEffect() {
    gridElements.forEach(squareDiv => {
        squareDiv.addEventListener('mousemove', function() {
            squareDiv.style.backgroundColor = 'black';
        })
    });

}

makeSketchEffect(); */

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

    if (!userInput || userInput === 0 || userInput > 100) {
        alert(`Please enter a valid input!`);
    } else {
        deleteGrid();
        createGrid(userInput);
        //makeSketchEffect();
        
    }
    
    
})












