let projectsButton = document.getElementById("projectsButton");
let speedrunsButton = document.getElementById("speedrunsButton");

let selectedButton = projectsButton;
selectedButton.classList.add("selectedNav");


projectsButton.onclick = function() {
    selectedButton.classList.remove("selectedNav");

    console.log("projects");

    selectedButton = projectsButton;
    selectedButton.classList.add("selectedNav");
}

speedrunsButton.onclick = function() {
    selectedButton.classList.remove("selectedNav");

    selectedButton = speedrunsButton;
    selectedButton.classList.add("selectedNav");
}