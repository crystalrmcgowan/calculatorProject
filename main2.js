let buttons = document.querySelectorAll("button")
let clear = document.querySelector("#cButton")
let display = document.querySelector("output")
let decimal = document.querySelector("#decimal")
let equals = document.querySelector("#equal")
let numbers = document.querySelectorAll(".numbers")
let operations = document.querySelectorAll(".operations")

let num1 = ''
let num2 = ''
let op = ''

const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")

for (var i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", function(event){
    if (operations.length === 0) {
      num1 += numbers
    } else {
      num2 += numbers
    }
    // set `op` to be the value of this button that was clicked
  })
}

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function(event) {
    num1 += event.target.value
    display.textContent = num1
    // OR
    num2 += event.target.value
    display.textContent = num2
  })
}

for (var i = 0; i < buttons.length; i++) {

  decimal.addEventListener("click", function addDecimal() {
    display.textContent = "."
  })

  equals.addEventListener("click", function equals() {
    if (op === "/") {
      display.textContent = num1 / num2
    }

    if (op === "*") {
      display.textContent = num1 * num2
    }

    if (op === "-") {
      display.textContent = num1 - num2
    }

    if (op === "+") {
      display.textContent = num1 + num2
    }
  })

  clear.addEventListener("click", function clear() {
    display.textContent = " "
    })
}
