const addCatPicture = function () {
    const randomNum = Math.floor(Math.random() * 100);
    const catPictureElement = document.createElement("img");
    catPictureElement.src = `https://placekitten.com/${randomNum}/${randomNum}`; // can also use catPictureElement.setAttribute("src", `https://placekitten.com/${randomNum}/${randomNum}`)
    catPictureElement.style.width = "100px";
    catPictureElement.style.height = "100px";
    catPictureElement.setAttribute("onclick", "removeCat(event)");
    catPictureElement.setAttribute("class", "kitty-cat");
    const listElement = document.querySelector(".list-container"); // targets parent node
    listElement.appendChild(catPictureElement)
    // this function should create image elements
    // append it to the parent element
//     const headingOneElement = document.createElement("h1"); // can use anywhere, is overridden later on if targeting, for instance, an element ID that belongs in a different section

// headingOneElement.innerText = "Sup nerds";

// const bodyElement = document.querySelector("body"); // targets parent node

// bodyElement.appendChild(headingOneElement)
}

const removeCat = function(event) {
    // document.querySelector(".kitty-cat").remove(); // removes first picture first
    event.currentTarget.remove(); // currentTarget can target the function argument
}



 // create event listener for button to trigger addCatPicture
 document.querySelector('.add-cat').addEventListener('click', function () {
    addCatPicture();
  });
