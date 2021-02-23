
// alert('Hello Everyone!!');

function update(element) {
    document.getElementById('description').innerHTML = element.alt;
}

function undo() {
    document.getElementById('description').innerHTML = "Hover Over an image below to display here..";
}