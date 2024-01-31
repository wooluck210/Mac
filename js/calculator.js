class Calculator {
    constructor()
}

const calC = document.querySelector('.calculator.container')
const btns = calC.querySelectorAll('button')
const calcInput = calC.querySelector('input')
const calcResult = calC.querySelector('.calc-result')

let userInput = ''
let displayValue = ''
let resultValue = ''
let operator = ''
