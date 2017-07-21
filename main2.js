let buttons = document.querySelectorAll("button")
let clear = document.querySelector("#cButton")
let display = document.querySelector("output")
let decimal = document.querySelector("#decimal")
let equals = document.querySelector("#equal")
let numbers = document.querySelectorAll(".numbers")

let num1 = 0
let num2 = 0

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    let seven = document.querySelector("#seven")
    let eight = document.querySelector("#eight")
    let nine = document.querySelector("#nine")
    let four = document.querySelector("#four")
    let five = document.querySelector("#five")
    let six = document.querySelector("#six")
    let one = document.querySelector("#one")
    let two = document.querySelector("#two")
    let three = document.querySelector("#three")

    if (seven) {
      display.textContent = "7"
    }
    else if (eight) {
      display.textContent = "8"
    }
    else if (nine) {
      display.textContent = "9"
    }
    else if (four){
      display.textContent = "4"
    }
    else if (five) {
      display.textContent = "5"
    }
    else if (six) {
      display.textContent = "6"
    }
    else if (one) {
      display.textContent = "1"
    }
    else if (two) {
      display.textContent = "2"
    }
    else if (three) {
      display.textContent = "3"
    }
  })
}

for (var i = 0; i < buttons.length; i++) {
  clear.addEventListener ("click", function clear() {
    display.textContent = " "
  })

  decimal.addEventListener ("click", function addDecimal() {
    display.textContent = "."
  })

  equals.addEventListener ("click", function equals() {
    if (buttons[i] === "divide") {
      display.textContent = num1 / num2
    }

    if (buttons[i] === "multiply") {
      display.textContent = num1 * num2
    }

    if (buttons[i] === "subtract") {
      display.textContent = num1 - num2
    }

    if (buttons[i] === "add") {
      display.textContent = num1 + num2
    }
  })
}
