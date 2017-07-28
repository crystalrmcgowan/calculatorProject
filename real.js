const numbers = document.querySelectorAll(".numbers")
const operations = document.querySelectorAll(".operations")
const displayBox = document.querySelector("output")
const clearButton = document.getElementById("cButton")
const equals = document.getElementById("equal")

let num1 = 0
let num2 = 0
let operator = ""

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", event => {
    let numberValue = event.target.value
    displayBox.textContent += numberValue
    if (operator) {
      num2 += numberValue
    } else {
      num1 += numberValue
    }
  })
}

for (var i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", operationsEvent => {
    operator = operationsEvent.target.value
    displayBox.textContent += operator

    if (operations[i] === "=") {
      let answer = ""
      console.log("hey")
    }
  })
}

clearButton.addEventListener("click", clearEvent => {
  num1 = ""
  num2 = ""
  operator = ""
  displayBox.textContent = ""
})

equals.addEventListener("click", answerEvent => {
  if (event.target.value === "/") {
    answer = num1 / num2
  } else if (event.target.value === "*") {
    answer = num1 * num2
  } else if (event.target.value === "-") {
    answer = num1 - num2
  } else if (event.target.value === "+") {
    answer = num1 + num2
  }
})
