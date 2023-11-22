const renderiza_string = function(elemento){
    const city = 'Brasil';
    const valor = elemento.value;
    const outro_valor = valor.concat(" ...");
    console.log(valor);
    console.log(valor.trim());
    console.log(valor.valueOf());

    const render = document.getElementById('render_string');
    render.innerHTML = `
    <p>${valor.toUpperCase()}</p>
    <p>${valor.toLowerCase()}</p>
    <p>${valor.substring(0, 4)}</p>
    <p>Começa com script? ${valor.startsWith("Script")}<p>
    <p>Termina com legal? ${valor.endsWith("legal")}<p>
    <p>Existe a palavra chuva? ${valor.trim().toLowerCase
    ().includes("chuva")}</p>
    <p>${outro_valor}</p>
    <p>${valor.replace("a", 5)}</p>
    <p>${valor.replaceAll("a", 9)}</p>
    `;
}