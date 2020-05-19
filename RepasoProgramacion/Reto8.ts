function SumaCar(Array):number{
    let Resultado:number=0;
    for(let i=0;i<Array.length;i++){

            Resultado+=Array[i].length;
            
        }
    
    return Resultado;
}