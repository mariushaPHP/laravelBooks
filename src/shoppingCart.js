

const shoppingCart = (books) =>{

    const btn = document.querySelectorAll('.btn');

    for(let i=0; i<btn.length; i++){

        btn[i].addEventListener('click', () => {

            let Array = [];

            if(JSON.parse(localStorage.getItem('bookArray')) != null)
                Array = JSON.parse(localStorage.getItem('bookArray'));

            Array.push(document.querySelectorAll('h5')[i].textContent);
            console.log(Array);
            localStorage.setItem('bookArray', JSON.stringify(Array));
        })
    }
}

export default shoppingCart;