const API = "https://rickandmortyapi.com/api/character";
//obtener los resultados de la API osea la url
const getData = (api) =>{
    //retorna el resultado  de la API ya que el fetch se encarga de consumir la API osea (api) que tiene la url
    return fetch(api)
    .then((response)=> response.json())
    .then((json)=>{//guarda esos json en esta palabra(json <-- hay 5000 fotos )
        fillData(json);//se evian esas fotos a la funcion fill data para ya dibujarlos en el html
    })
    .catch((error)=> {
        console.log("error:", error);//en caso tal que haya un error
    })
}

const fillData = (json) =>{

let html = "";
json.results.forEach( r => {
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html +=' <div class="card-body">';
    html += `<img src="${r.image}"class="card-img-top" alt="">`
    html += `<h5 class="card-title">${r.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    
});
 

document.getElementById("dataAlbum").innerHTML = html;// se toma el div donde se van a poner las 10 cards y se coloca el html

}

//se invoca la función aytomaticamente, ya que no tenemos el boton se le envia la variable api
getData(API);