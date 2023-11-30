var frutas = ["Maçã", "Banana"];

console.log(frutas.length, frutas);

for(indice in frutas) {
    console.log(frutas);
}

frutas.forEach(function (elemento, indice_do_elemento) {
    console.log(elemento, indice_do_elemento);
});

frutas.push("Uva");
frutas.push("Pera");

console.table(frutas);
const valor_removido = frutas.pop();
console.table(frutas);
console.log("Removido do fim: ", valor_removido);

const valor_removido_do_inicio = frutas.shift();
console.table(frutas);
console.log("Removido do início: ", valor_removido_do_inicio);

frutas.unshift("Melancia");
console.table(frutas);

const posicao = frutas.indexOf("Banana");
console.log("Posição: ", posicao);

if(posicao !== -1) {
    console.warn("Fruta encontrada");
    const outro_item_removido = frutas.splice(posicao, 1);
    console.log("Removido a fruta: ", frutas[posicao]);
    console.table(frutas);
} else {
    console.error("Fruta não encontrada");
}

const frutaExiste = frutas.includes("Uva");
console.log("Fruta existe? ", frutaExiste);