function  Par(Array:number[]):boolean{
    let Resultado:boolean=false;
    
    let i=0;
    while(i<Array.length && Resultado==false){
        if(Array[i]%2==0){
            Resultado = true;
        }
        
    }
    
    return Resultado;
}
Par([2,3,4,5]);