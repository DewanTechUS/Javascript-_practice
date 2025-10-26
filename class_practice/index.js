// 1. Select Elements
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let num = document.querySelector('#num')
let count = 0
// 2. Add Event Listeners

plus.addEventListener('click',function(){
  ++count
  num.innerText = count
  // let current = parseInt(num.innerText)
  // num.innerText = current + 1
} )

minus.addEventListener('click',function(){
  --count
  num.innerText = count
  // let current = parseInt(num.innerText)
  // num.innerText = current - 1
} )