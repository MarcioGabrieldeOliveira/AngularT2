// function top() {
//     window.alert("TOP")
// }
let menu = document.getElementById("menu");
    
    function mostrarmenu() {
        if (getComputedStyle(menu).display == "none") {
            menu.style.display = "inline-block";
        } else {
            menu.style.display = "none"
        }
    }