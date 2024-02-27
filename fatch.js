// function fast(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// }


function fast2(){
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(display => console.log(display))
}