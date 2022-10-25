/*console.log("Javascript is amazing");/ejercicio 1
console.log("C is fun");
console.log("Python is cool ");*/
// function llamar (algo){               //ejercicio 2
//     if (algo === undefined){
//         console.log("argument not found")
//     }else{
//         console.log(algo)
//     }
// }   
function llamar (algo){      
        console.log(typeof algo)        
        if (typeof algo === 'number'){
        console.log(`my number: ${algo}`)
    }else{
        console.log("not a number");
    }
}