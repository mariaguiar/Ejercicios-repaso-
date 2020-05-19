function  Par(Array){
    let Resultado=false;
    
    let i=0;
    while(i<Array.length && Resultado[i]!=true){
        if(Array[i]%2==0){
            Resultado[i]= true;
        }
        
    }
    
    return Resultado;
}
Par([2,3,4,5]);