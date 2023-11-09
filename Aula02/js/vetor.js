const veiculos = [
    {modelo: "passeio", marca : "nissam"},
    {modelo: "esportivo", marca : "honda"},
    {modelo: "esportivo", marca : "porshe"},
    {modelo: "passeio", marca : "bmw"},
    {modelo: "esportivo", marca : "tesla"},
    {modelo: "passeio", marca : "nissam"},

];

const exibe_veiculos = function(){
    const render = document.querySelector('#render');
    render.innerText = "";
    for(veiculo of veiculos){
        render.innerHTML += `
        <div style="width:25%; margin:10px;">
            <h1>modelo: <b>${veiculo.modelo}</b></h1>
            <h2>marca: <b>${veiculo.marca}</b></h2>
        </div>
        `
    }
}