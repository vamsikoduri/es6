let promis = new Promise((resolve,reject) =>{
setTimeout(()=>{
    reject();
},3000);
});

promis
.then(()=> console.log("finally"))
.then(()=> console.log("Execution completed") )
.catch(()=> console.log("UH oh !!!"));



let url = 'https://jsonplaceholder.typicode3634563.com/posts254234'

fetch(url)
.then(response => console.log(response))
.catch(error => console.log('BAD',error));
