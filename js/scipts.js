var div = document.getElementsByTagName("div")[0]

div.addEventListener("click", toggleColor)

function toggleColor() {
    if (div.style.backgroundColor === 'red') {
        div.style.backgroundColor = 'white';
        div.style.color = 'black';
       

    } else {
       div.style.backgroundColor = 'red';
    }
}