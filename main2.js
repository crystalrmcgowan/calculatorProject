let numbers = document.querySelectorAll(".numbers")
let output = document.querySelector("p")
let clear = document.querySelector("#cButton")
let opsButtons = document.querySelectorAll(".operations")
let equals = document.querySelector("#equal")

let num1 = 0
let num2 = 0
let results = 0
let operator = ""

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    output.innerHTML += numbers[i].textContent
  })
}

for (var i = 0; i < opsButtons.length; i++) {
  opsButtons[i].addEventListener("click", function() {
    operator = opsButtons[i].textContent
    num1 = parseFloat(output.textContent)
    output.textContent = ""
  })
}

clear.addEventListener("click", function clearIt() {
  output.innerHTML = ""
})

equals.addEventListener("click", function dothings(event) {
  num2 = parseFloat(output.textContent)
  output.innerHTML = ""
  if (op === "/") {
    results = num1 + num2
  } else if (op === "*") {
    results = num1 * num2
  } else if (op === "-") {
    results = num1 - num2
  } else if (op === "+") {
    results = num1 + num2
  }
  output.innerHTML = results
})
