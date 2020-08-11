const numbers = [1, 2, 3];


function double(numbers) {
    
    let [current,...rem] = numbers;
    if(current){
      output.push(current * 2);
      double(rem);
     }
     else
     {
         return ouput;
     }
       
}

console.log(double(numbers));