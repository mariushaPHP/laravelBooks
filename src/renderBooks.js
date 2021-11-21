
const renderBooks = (books) => {

        for (let types in books) {

                const accordItem = document.createElement('div');
                accordItem.className = "accordion-item";
        
                const accordHeader = document.createElement('h2');
                accordHeader.className = "accordion-header";
                accordHeader.id = `heading${types}`
        
                const button = document.createElement('button');
                button.className = "accordion-button collapsed";
                button.textContent = `${types} literatūra`;
                button.setAttribute("data-bs-toggle", "collapse");
                button.setAttribute("data-bs-target", `#collapse${types}`);
                
                const accordCollapse = document.createElement('div');
                accordCollapse.className = "accordion-collapse collapse";
                accordCollapse.id = `collapse${types}`;
                accordCollapse.setAttribute("data-bs-parent", "#accordion");
                
                const accordBody = document.createElement('div');
                accordBody.className = "accordion-body";
                accordBody.style.display = "flex";
                accordBody.style.flexWrap = "wrap";
       
                for (let book of books[types]) { 

                    const bookArea = document.createElement('div');
                    bookArea.className = "bookArea";
                    bookArea.style.width = "250px";
                    bookArea.style.padding = "20px";
                    
                    const h5 = document.createElement('h5');
                    h5.textContent = book.name;
        
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
        
                    bookArea.appendChild(h5);
                    bookArea.appendChild(ul);
                    accordBody.appendChild(bookArea);

                }
        
               accordHeader.appendChild(button);
               accordCollapse.appendChild(accordBody);
               accordItem.appendChild(accordHeader);
               accordItem.appendChild(accordCollapse);
               accordion.appendChild(accordItem);
        
            }
}
export default renderBooks;