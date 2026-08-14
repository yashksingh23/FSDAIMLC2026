const div = document.getElementById("container");
const button = document.getElementById("btm");

function display() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            div.innerHTML = `<h2>${data[0].title}</h2>`;
        })
        .catch(error => {
            console.log(error);
        });
}

button.addEventListener("click", display);