const urlCharacters = "https://rickandmortyapi.com/api/character";
 const arregloCharacters = [];
 const container = document.getElementById("container");

 function guardarCharacters(array){
     for (const character of array) {
       arregloCharacters.push(character);
     }
   }

 async function getCharacters (url){
    let response = await fetch(url);
     if (response.ok){
       let responseContents = await response.json();
  
       guardarCharacters(responseContents.results);
       showData(arregloCharacters);
  
     } else {
       alert("HTTP ERROR: " + response.status);
     }
   }
   
   
function showData(dataArray) {
   
    for (const personaje of dataArray) {


 container.innerHTML += `
       <article>


       <div class="image-container">
           <img src="${personaje.image}" 
           alt="Personaje">
       </div>
       <h2>${personaje.name}</h2>
       <span>${personaje.status}</span>

    </article>  `
    }

  }

   getCharacters(urlCharacters);
   
   console.log(arregloCharacters)
  

   
   /*function getCharacters (done){

    const results = fetch ("https://rickandmortyapi.com/api/character");

    results
          .then(response => response.json())
          .then(data => {
             done(data)
           });
 }

 getCharacters (data =>{


    data.results.forEach(personaje =>{

       const article = document.createRange().createContextualFragment(
       `
       <article>


       <div class="image-container">
           <img src="${personaje.img}" 
           alt="Personaje">
       </div>
       <h2>${personaje.name}</h2>
       <span>${personaje.status}</span>

    </article>  `)

     })

     const main = document.querySelector("main");
     main.append(article);

 });*/

