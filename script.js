/* 
 - Functionality
    1. Decimal
    2. AC and Delete
    3. Rework to perform multiple operations
        -> 'perform operation' when =, typeof x is Number
        ->  after performing result = x
*/

let x = null
let y = null
// listen for digit and decimal
let hasDecimal = false 
const digitBtns = document.querySelectorAll(".digit")
digitBtns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(!hasDecimal || button.textContent != '.' ) // does not have decimal (allows one dot) OR digit 
            makeNumber(button.textContent)
        if(button.textContent === '.' )
            hasDecimal= true
    })
})

// screen elements
const screenCurrent = document.querySelector('.screen-current')
const screenOperator = document.querySelector('.screen-operator')
const screenPast = document.querySelector('.screen-past')
// listen for operator and equals
let operator = ''
const operatorBtns = document.querySelectorAll('.operator')
operatorBtns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('equals')){ // '='
            y = Number(numberString) // second number is made
            numberString = '' // numberString is reset
            x = operation(x,operator,y)
            screenCurrent.textContent = ''
            screenOperator.textContent = ''
        }
        else{ // '+-*/'
            operator = button.textContent
            console.log(operator);
            if(operator === '+/-')
                numberString = '-'+numberString
            screenCurrent.innerHTML = ''
            screenOperator.innerHTML = operator
            screenPast.innerHTML = numberString
            if(x===null){
                x = Number(numberString) // first number is made
                numberString = '' // numberString is reset
            }
            else if(y===null){
                y = Number(numberString) // second number is made
                numberString = '' // numberString is reset
                x = operation(x,operator,y)
            }
        }
    })
})

// append digit to make number
let numberString = ''
function makeNumber(digit){
    numberString = numberString + digit
    console.log(numberString);
    screenCurrent.innerHTML = numberString
}

//listen for deletes
const deleteBtns = document.querySelectorAll('.delete')
deleteBtns.forEach((deleteBtn)=>{
    deleteBtn.addEventListener('click',()=>{
        if(deleteBtn.classList.contains('all')){ // reset all variables
            numberString = ''
            operator = ''
            x = 0
            y = 0
        }
        else{
        numberString = numberString.slice(0,-1) // slice last character
        console.log(numberString)
        }
    })
})

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

function operation(x,operator,y){
    // perform operation
    result = null
    if(operator === '+')
        result = add(x,y)
    else if(operator === '-')
        result = subtract(x,y)
    else if(operator === '*')
        result = multiply(x,y)
    else if(operator === '/')
        result = divide(x,y)
    else if(operator === 'xy')
        result = power(x,y)
    console.log(x,operator,y,'=',result);
    y = null
    screenPast.textContent = result
    return result
}

