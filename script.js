let button

window.onload = function(){
    const buttons = document.querySelector("#buttons")
    if(!buttons) return

    button = createButton()
}

function createButton(){
    const button = document.createElement("button")
    button.classList.add("dyt")
    button.classList.add("button")
    button.textContent = "ROTATE"
    button.addEventListener("click", change)
    document.querySelector(".ytp-chrome-controls .ytp-right-controls").prepend(button)
    return button
}

function change() {
    document.querySelector("video").classList.toggle("rotate")
}