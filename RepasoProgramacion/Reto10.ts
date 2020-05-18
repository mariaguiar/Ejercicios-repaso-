function EvenOdd(numero){
    if (numero%2==0){
        console.log("Es par");

    }
    else{
        console.log("Es Impar");
        
    }
}
function SumaCar(Array){
    let Resultado=0;
    for(let i=0;i<Array.length;i++){
        for(let a=0;a<Array[i].length;a++){

            ++Resultado;
        }
        
        
    }
    return Resultado;
}
 let numero1=SumaCar(["Casa", "Coche", "Ciudad", "Cesta"]);
 let numero2=SumaCar(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]);
 let numero3=SumaCar(["Venezuela", "Veneno", "Voltaje"]);
 EvenOdd(numero1);
 EvenOdd(numero2);
 EvenOdd(numero3);