const url_base = "https://pokeapi.co/api/v2/";
let endpoint = "";
let dados = [];

fetch(url_base)
    .then((response) => response.json())
    .then((json) => {
        exibeEndpoints(json);
    })
    .catch((erro) => console.error(erro))
    .finally(() => {
        console.log("Requisição finalizada")
    });

const exibeEndpoints = function (endpoints){
    const ul_endpoints = document.getElementById("endpoints");
    const keys = Object.keys(endpoints);
    keys.forEach((key) => {
        ul_endpoints.innerHTML += 
        `<li onclick="consultaEndpoint('${key}','${endpoints[key]}')">${key}</li>`;
    });
};

const consultaEndpoint = function (key, endpoint){
    fetch(endpoint)
    .then((response) => response.json())
    .then((json) => {
        console.log(endpoint, json);
        dados = json;
        if(key == 'pokemon'){
            renderPokemons();
        }
    })
    .catch((erro) => console.error(erro))
    .finally(() => {
        console.log("Requisição finalizada")
    });
};

const renderPokemons = function(){
    const div_items = document.getElementById('items');
    const btn_previous = document.getElementById('previous');
    const btn_next = document.getElementById('next');
    dados.results.forEach(item => {
        div_items.innerHTML += `<h1 style="padding:5px;">${item.name}</h1>`;
    });
    if(dados.previous == null){
        btn_previous.disable = true;
    };

    if(dados.next == null){
        btn_next.disable = true;
    } else {
        if(btn_next.disabled == true){
            btn_next.disabled = false;
        }
        btn_next.onclick = function(){
        consultaEndpoint('pokemon', dados.next);
        };
    }
};