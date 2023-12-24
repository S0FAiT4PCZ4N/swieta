let swietadiv = document.getElementById("swieta")
let text = "Wesołych świąt 2023!";

for(let i = 0; i < text.length; i++) {
    let letter = text.charAt(i);
    let temptext = swietadiv?.innerHTML;
    setTimeout(() => {
        swietadiv!.innerHTML = temptext + letter;
    })
}

