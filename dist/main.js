"use strict";
let swietadiv = document.getElementById("swieta");
let text = "Wesołych świąt 2023!";
let idx = 0;
setInterval(() => {
    if (idx < text.length) {
        let temptext = swietadiv === null || swietadiv === void 0 ? void 0 : swietadiv.innerHTML;
        let letter = text.charAt(idx);
        swietadiv.innerHTML = temptext + letter;
        idx++;
    }
}, 100);
