/* 
 - click digits (string) -> append them to make number 
 - first number is made when operator is clicked
 - second number is made when equals is clicked
 - send them in operation() 
*/

let x = 0
let y = 0
// listen for digit 
const digitBtns = document.querySelectorAll(".digit")
digitBtns.forEach((button)=>{
    button.addEventListener('click',()=>{
        makeNumber(button.textContent)
    })
})

// listen for operator and equals
let operator = ''
const operatorBtns = document.querySelectorAll('.operator')
operatorBtns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('equals')){ // '='
            y = Number(numberString) // second number is made
            numberString = '' // numberString is reset
            
            // perform operation
            if(operator === '+')
                console.log(x,operator,y,'=',add(x,y))
            else if(operator === '-')
                console.log(x,operator,y,'=',subtract(x,y))
            else if(operator === '*')
                console.log(x,operator,y,'=',multiply(x,y))
            else if(operator === '/')
                console.log(x,operator,y,'=',divide(x,y))
            else if(operator === 'xy')
                console.log(x,'^',y,'=',power(x,y))
        }
        else{ // '+-*/'
            operator = button.textContent
            console.log(operator);
            x = Number(numberString) // first number is made
            numberString = '' // numberString is reset
        }
    })
})

// append digit to make number
let numberString = ''
function makeNumber(digit){
    numberString = numberString + digit
    console.log(numberString);
}

function add(x, y){
    return x+y
}

function subtract(x, y){
    return x-y
}

function multiply(x, y){
    return x*y
}

function divide(x, y){
    return x/y
}

function power(x,y){
    return Math.pow(x,y)
}

