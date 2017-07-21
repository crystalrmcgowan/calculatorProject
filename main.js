let buttons = document.querySelectorAll("button")
let value = document.querySelectorAll("value")
let result = document.querySelector("output")


let num1 = 0
let num2 = 0
let op = ''

//I want you to run through all of the buttons
for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].type === "reset") {
    buttons[i].addEventListener("click", function (){
      document.getElementById('#result')
      result.textContent = " "
    })
  }

  if (buttons[i].className !== "operations") {
    buttons[i].addEventListener("click", function() {
      let number = this.value
      result.textContent += number
      if (op.length === 0) {
        num1 += number
      } else {
        num2 += number
      }
    })
  }

  //if the button is the divide button..
  if (buttons[i].name === "divide") {
    let op = '/'
    //I want you to do something when the user clicks
    buttons[i].addEventListener("click", function(){
      //the thing I want you to do is to take the user's first input and divide it by the user's second input
      document.getElementById('#divide')
      result.textContent = num1 / num2
    })
  }

  if (buttons[i].name === "multiply") {
    buttons[i].addEventListener("click", function(){
      let op = '*'
    })
  }

  if (buttons[i].name === "subtract") {
    buttons[i].addEventListener("click", function() {
      let op = '-'
    })
  }

  if (buttons[i].name === "add") {
    buttons[i].addEventListener("click", function() {
      let op = '+'
    })
  }
}
