import renderData from "./renderData";

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

                    accordBody.appendChild(renderData(book));
                }
        
               accordHeader.appendChild(button);
               accordCollapse.appendChild(accordBody);
               accordItem.appendChild(accordHeader);
               accordItem.appendChild(accordCollapse);
               //accordion.appendChild(accordItem);
                document.querySelector('.accordion').appendChild(accordItem);
            }
}
export default renderBooks;