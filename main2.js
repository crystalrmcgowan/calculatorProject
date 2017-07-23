let numbers = document.querySelectorAll(".numbers")
let output = document.querySelector("output")
let clear = document.querySelectorAll("#cButton")
let opsButtons = document.querySelectorAll(".operations")
let equals = document.querySelectorAll("#equal")

let num1 = 0
let num2 = 0
let results = 0

clear.forEach((button, i) => {
  button.addEventListener('click', () => {
    output.textContent = ""
  })
})

function addValueToDisplay(event) {
  const numbers = event.target.value
  output.textContent += numbers
}

opsButtons.forEach((button, i) => {
  button.addEventListener('click', addValueToDisplay)
})

numbers.forEach((button, i) => {
  button.addEventListener('click', addValueToDisplay)
})

equals.forEach((button, i) => {
  button.addEventListener('click', function (){
    if (opsButtons.value === "/") {
        results = num1 / num2
    }
    if (opsButtons === "*") {
        results = num1 * num2
    }
    if (opsButtons === "-") {
        results = num1 - num2
    }
    if (opsButtons === "+") {
        results = num1 + num2
    }
    output.innerHTML = results
  })
})
