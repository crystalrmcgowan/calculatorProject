let buttons = document.querySelectorAll("button")
let value = document.querySelectorAll("value")
let result = document.querySelector("output")

let divide = document.querySelector("#divide")
let multiply = document.querySelector("#multiply")
let add = document.querySelector("#add")
let subtract = document.querySelector("#subtract")

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let number = this.value
    result.textContent += number
  })
}

document.getElementById("#cButton").reset()

// for (var i = 0; i < operations.length; i++) {
//   let _button = document.querySelector(operations[i].buttonSelector)
//   _button.addEventListener("click", function() {
//     let sign = this.textContent
//     console.log("got here", this.textContent, sign)
//     result.textContent = sign
//   })
// }
