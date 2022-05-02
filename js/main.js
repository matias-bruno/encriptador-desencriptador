let btnenc = document.querySelector("#btn-enc");
btnenc.onclick = function() {
    let input = document.querySelector("#entrada");
    let texto = input.value;
    texto = texto.replaceAll("e","enter");
    texto = texto.replaceAll("i","imes");
    texto = texto.replaceAll("a","ai");
    texto = texto.replaceAll("o","ober");
    texto = texto.replaceAll("u","ufat");

    mostrarResultado(texto);
    input.value = "";
};
let btndes = document.querySelector("#btn-des");
btndes.onclick = function() {
    let input = document.querySelector("#entrada");
    let texto = input.value;
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");
    
    mostrarResultado(texto);
    input.value = "";
};
let btnCopiar = document.querySelector("#btn-copiar");
btnCopiar.onclick = function() {
    let auxInput = document.createElement("input");
    auxInput.value = document.querySelector("#resultado").innerText;
    document.body.appendChild(auxInput);
    auxInput.select();
    document.execCommand("copy");
    auxInput.remove();
}
function mostrarResultado(texto) {
    let textoResultado = document.querySelector("#texto-resultado");
    let btnCopiar = document.querySelector("#btn-copiar");
    if(texto.length > 0) {
        textoResultado.innerHTML = `
        <p id="resultado">${texto}</p>
        `;
        btnCopiar.style.display = "block";
    } else {
        textoResultado.innerHTML = `
        <img class="dibujo d-none d-md-block" src="img/Munieco.png" >
        <p id="resultado">Ningún mensaje fue encontrado</p>
        <p id="info">Introduce el texto que desees encriptar o desencriptar</p>
        `;
        btnCopiar.style.display = "none";
    }
}