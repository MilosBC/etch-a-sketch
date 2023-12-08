'use strict';

const container = document.querySelector('.container');
const gridDimensions = document.querySelectorAll('.grid-dimensions');
let gridElement;

const clearGrid = document.querySelector('.clear');


function createGrid(num) {
    for (let i = 0; i < num * num; i++) {

           gridElement = document.createElement('div');
            gridElement.classList.add('grid-element');

            gridElement.style.width = `${900 / num}px`;
            
            
           
            
            
            container.appendChild(gridElement); 
            

        
    }

     for (let i = 0; i < gridDimensions.length; i++) {
        gridDimensions[i].textContent = `${num}`;
        
    } 






}


createGrid(16);

// storing all the created divs in a NodeList
const gridElements = document.querySelectorAll('.grid-element');

function makeSketchEffect() {
    gridElements.forEach(squareDiv => {
        squareDiv.addEventListener('mousemove', function() {
            squareDiv.style.backgroundColor = 'black';
        })
    });

}

makeSketchEffect();

//Clear all sketch effects

clearGrid.addEventListener('click', function() {
    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].style.backgroundColor = 'white';
    }
})












