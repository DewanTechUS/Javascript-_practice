let plus = document.querySelector('#plus') 
let minus = document.querySelector('#minus')
let num = document.querySelector('#num')
let count = 0
plus.addEventListener('click',function(){
  ++count
  num.innerText = count
 } )
minus.addEventListener('click',function(){
  --count
  num.innerText = count
} )