
const content = document.getElementById("dynamicContent");


const title1 = document.createElement("h1");
title1.textContent = "My";
const title2 = document.createElement("h1");
title2.textContent = "Portfolio";


const paragraph = document.createElement("p");
paragraph.textContent = "This is Rodney Swaji's Portfolio created on August 2025 during a Moringa School Lab";


const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttons");

const likebtn = document.createElement("button");
likebtn.classList.add("like");
likebtn.textContent = "LIKE ?";

const hatebtn = document.createElement("button");
hatebtn.classList.add("hate");
hatebtn.textContent = "HATE ?";

buttonContainer.appendChild(likebtn);
buttonContainer.appendChild(hatebtn);


content.appendChild(title1);
content.appendChild(title2);
content.appendChild(paragraph);
content.appendChild(buttonContainer);



