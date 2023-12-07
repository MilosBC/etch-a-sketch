'use strict';

const container = document.querySelector('.container');
const gridDimensions = document.querySelectorAll('.grid-dimensions');
let gridElement;

function createGrid(number) {
    for (let i = 0; i < number * number; i++) {

           gridElement = document.createElement('div');
            gridElement.classList.add('grid-element');

            gridElement.style.width = `${900 / number}px`;
            
            
           
            
            
            container.appendChild(gridElement); 
            

        
    }

     for (let i = 0; i < gridDimensions.length; i++) {
        gridDimensions[i].textContent = `${16}`;
        
    } 






}

createGrid(16);