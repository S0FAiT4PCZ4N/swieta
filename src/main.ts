let swietadiv = document.getElementById("swieta")
let text = "Wesołych świąt 2023!";

let idx = 0;

let interval = setInterval(() => {
    if (idx < text.length) {
        let temptext = swietadiv?.innerHTML;
        let letter = text.charAt(idx);
        swietadiv!.innerHTML = temptext + letter;
        idx++;
    } else {
        clearInterval(interval);
    }
}, 100)

