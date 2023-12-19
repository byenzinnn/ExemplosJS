function postInfo(){
    let titulo = document.querySelector("input[name='titulo']");
    let descricao = document.querySelector("textarea[name='descricao']");
    
    fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: 'POST',
        body: JSON.stringify({
            title: titulo.value,
            body: descricao.value,
            userId: 2, 
        }),
        headers: {
            "Content-Type": "application/json, charset=UTF-8",
        },
    })
        .then((response) => response.json())
        //.then(function(response){
        //    return response.json();
        //})
        .then((json) => console.log(json));
}