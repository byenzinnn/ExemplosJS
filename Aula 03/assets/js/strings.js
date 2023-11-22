const renderiza_string = function(elemento){
    console.log(elemento.value);
    console.log(elemento.value.trim());
    console.log(elemento.value.valueOf());

    const render = document.getElementById('render_string');
    render.innerText = `
    <p>${valor.toUpperCase()}<p>
    <p>${valor.toLowerCase()}<p>
    `
}