const headingOneElement = document.createElement("h1"); // can use anywhere, is overridden later on if targeting, for instance, an element ID that belongs in a different section

headingOneElement.innerText = "Sup nerds";

const bodyElement = document.querySelector("body"); // targets parent node

bodyElement.appendChild(headingOneElement) // appendChild adds element as child of targeted element

const listItemsElements = document.querySelectorAll(".list-icon"); // returns an array of elements with that class
listItemsElements.forEach(listItemElements => {
    listItemElements.addEventListener('click', function (){
        changeTheme()
 } ) // specify type of event and callback
})

function addItem(){
    const newItem = document.createElement('li');
    const newItemContent = document.getElementById('newItem').value;
    newItem.innerText = newItemContent;
    document.querySelector("ul").appendChild(newItem);
    document.getElementById("newItem").value = "";
}

function removeItem(){
    const deleteItem = document.querySelector('ul');
    deleteItem.innerHTML = ""
}

function changeTheme(){   // change body background color and font color
    const bodyElement = document.querySelector("body");
    if(Array.from(bodyElement.classList).includes("alternateBackground")){ // or bodyElement.getAttribute('class') === 'alternateBackground'
        bodyElement.classList.remove('alternateBackground'); // could then use bodyElement.removeAttribute('class')
    } 
    else {
        bodyElement.setAttribute("class", 'alternateBackground') // can also use ("style", "background: coral") for instance, but not best practice
    }
}