// Target container
const content = document.getElementById("dynamicContent");

// Create Title
const title1 = document.createElement("h1");
title1.textContent = "My";
const title2 = document.createElement("h1");
title2.textContent = "Portfolio";

// Create Paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";

// Create Buttons
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttons");

const exploreBtn = document.createElement("button");
exploreBtn.classList.add("explore");
exploreBtn.textContent = "Explore Now";

const videoBtn = document.createElement("button");
videoBtn.classList.add("video");
videoBtn.textContent = "Play Video";

buttonContainer.appendChild(exploreBtn);
buttonContainer.appendChild(videoBtn);

// Append to container
content.appendChild(title1);
content.appendChild(title2);
content.appendChild(paragraph);
content.appendChild(buttonContainer);



