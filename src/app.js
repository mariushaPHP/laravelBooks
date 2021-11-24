import accordion from "./accordion";
import books from "./data";
import shoppingCart from "./shoppingCart";

require('bootstrap');

accordion(books);
shoppingCart(books);

/*
const btn = document.querySelectorAll('.btn');
const bookArray = [];
for(let i=0; i<btn.length; i++){

    btn[i].addEventListener('click', () => {
        //console.log(document.querySelectorAll('h5')[i].textContent);
            JSON.parse(localStorage.getItem(bookArray));
            //const value = JSON.parse(localStorage.getItem(bookArray))
            bookArray.push(document.querySelectorAll('h5')[i].textContent);
            console.log(bookArray);
        //}

        localStorage.setItem('bookArray', JSON.stringify(bookArray));
        btn[i].style.color = 'red';
    })

}*/