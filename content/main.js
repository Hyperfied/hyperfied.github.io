let projectsButton = document.getElementById("projectsButton");
let gamesButton = document.getElementById("gamesButton");
let speedrunsButton = document.getElementById("speedrunsButton");

let projectsContent = document.getElementById("projectsContent");
let gamesContent = document.getElementById("gamesContent");
let speedrunsContent = document.getElementById("speedrunsContent");

let selectedButton = projectsButton;
let selectedContent = projectsContent;


projectsButton.onclick = function() {
    selectedButton.classList.remove("selectedNav");
    selectedContent.classList.add("hide");

    selectedButton = projectsButton;
    selectedContent = projectsContent;
    
    selectedButton.classList.add("selectedNav");
    selectedContent.classList.remove("hide");
}

gamesButton.onclick = function() {
    selectedButton.classList.remove("selectedNav");
    selectedContent.classList.add("hide");

    selectedButton = gamesButton;
    selectedContent = gamesContent;
    
    selectedButton.classList.add("selectedNav");
    selectedContent.classList.remove("hide");
}

speedrunsButton.onclick = function() {
    selectedButton.classList.remove("selectedNav");
    selectedContent.classList.add("hide");

    selectedButton = speedrunsButton;
    selectedContent = speedrunsContent;

    selectedButton.classList.add("selectedNav");
    selectedContent.classList.remove("hide");
}