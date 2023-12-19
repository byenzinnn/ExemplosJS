var myImage = document.querySelector("img");
const mySearch = document.getElementById("search");

mySearch.onkeyup = function(event){
    if(event.key == 'Enter'){
        getImage(mySearch.value);
    };
};
const getImage = function(termo){
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'text/jpg');
    myHeaders.append('Accept', 'image/jpg');
    myHeaders.append('X-Api-Key', '');

var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

var myRequest = new Request("https://api.api-ninjas.com/v1/randomimage?category=" + termo, myInit);

fetch(myRequest)
  .then(function (response) {
    return response.blob();
  })
  .then(function (response) {
    var objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });
}