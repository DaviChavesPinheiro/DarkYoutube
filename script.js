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
    button.textContent = "Dark"
    button.addEventListener("click", change)
    document.querySelector("#buttons").prepend(button)
    return button
}

function change() {
    document.querySelector("#content").classList.toggle("dark")
}