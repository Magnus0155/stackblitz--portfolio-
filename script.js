function darkModeBtn () {
    var element = document.body;
    element.classList.toggle("darkMode");
    console.log("button is clicked!");
}

document.getElementById("darkModeToggle").addEventListener("click",darkModeBtn);

