// function fast(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// }


function fast2(){
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(display => coll(display))
}

function coll(display){
    for(const dis of display){
       const ul = document.getElementById('list-item');
       const li = document.createElement('li');
      console.log( li.innerText = dis.title);
       ul.appendChild(li);
    }
}


function divContainer(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(displays => mainplay(displays))
}

function mainplay(plays){

    
    for(const play of plays){
        // console.log(play);
        const divContainers = document.getElementById('div-container');
        const createDivContainer = document.createElement('div');
        createDivContainer.classList.add("plas");
        createDivContainer.innerHTML = `
        <h3>${play.id}</h3>
        <h4>${play.title}</h4>
        <p>${play.thumbnailUrl}</p>
        
        `;

        divContainers.appendChild(createDivContainer);


    }
}



divContainer();