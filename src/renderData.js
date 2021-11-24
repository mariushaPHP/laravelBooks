
const renderData = (book) => {

    const bookArea = document.createElement('div');
    bookArea.className = "bookArea";
    bookArea.style.width = "250px";
    bookArea.style.padding = "20px";

    const h5 = document.createElement('h5');
    h5.textContent = book.name;
    const btn = document.createElement('btn');
    btn.className = "btn btn-primary";
    btn.innerHTML = "Pirkti";

    const ul = document.createElement('ul');

    const liISBN = document.createElement('li');
    liISBN.style.listStyle = "none";
    liISBN.textContent = `ISBN: ${book.ISBN}`;
    ul.appendChild(liISBN);

    const liYear = document.createElement('li');
    liYear.textContent = `Metai: ${book.year}`;
    liYear.style.listStyle = "none";
    ul.appendChild(liYear);

    const liPages = document.createElement('li');
    liPages.textContent = `Puslapiai: ${book.pages}`;
    liPages.style.listStyle = "none";
    ul.appendChild(liPages);

    const liPrice = document.createElement('li');
    liPrice.textContent = `Kaina: ${book.price} €`;
    liPrice.style.listStyle = "none";
    ul.appendChild(liPrice);

    bookArea.appendChild(btn);
    bookArea.appendChild(h5);
    bookArea.appendChild(ul);
    //accordBody.appendChild(bookArea);
    //document.querySelector('.accordBody').appendChild(bookArea);
    return bookArea;
}

export default renderData;