//console.log(window)
//alert("Hello, World!");


// single element selector
//const form = document.getElementById("my-form");
// console.log(form);

//console.log(document.getElementById("my-form"));
//console.log(document.querySelector(".container"));



// multiple element selector
//console.log(document.querySelectorAll('.items'));
//console.log(document.getElementsByClassName('items'));

//const items = document.querySelectorAll('.items');
//items.forEach((item) => console.log(item));

//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
//btn.style.background = 'red';
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
   

} );