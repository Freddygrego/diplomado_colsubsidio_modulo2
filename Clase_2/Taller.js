function Cuadro(tama,letra="X"){

    if (typeof tama === 'number'){
            let i = 0;
                while ( i < tama ){
                    console.log(`${letra}`.repeat(tama)) 
                    i++ 
                }
    }else if(typeof tama === 'undefined' ){
        console.log("Missing Size")
    }
}
Cuadro(7,"P");

