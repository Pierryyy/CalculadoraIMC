import { Modal } from "./modal.js"
import { alertError } from "./alert-error.js"
import { notNumber, calculateIMC } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
    event.preventDefault()

    const height = inputHeight.value
    const weight = inputWeight.value

    console.log(notNumber(weight))
    console.log(notNumber(height))

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
       alertError.open()
        return;
    }
    
    alertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

inputWeight.oninput = () =>{ alertError.close()}
inputHeight.oninput = () =>{ alertError.close()}