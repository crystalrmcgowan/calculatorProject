let buttons = document.querySelectorAll("button")
let value = document.querySelectorAll("value")
let result = document.querySelector("output")

let divide = document.querySelector("#divide")
let multiply = document.querySelector("#multiply")
let add = document.querySelector("#add")
let subtract = document.querySelector("#subtract")

for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].type === "reset") {
      buttons[i].addEventListener("click", function (){
      document.getElementById('#result')
      result.textContent = " "
      })
  }

  if (buttons[i].type === "button"){
    buttons[i].addEventListener("click", function() {
    let number = this.value
    result.textContent += number
    })
  }
}
