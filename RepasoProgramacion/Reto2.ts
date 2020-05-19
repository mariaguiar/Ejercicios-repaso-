 function Paieses(pais){
     let Resultado="";
    if(pais=="España"||pais=="Francia"||pais=="Suiza"||pais=="Alemania"){
        Resultado = "Europa";
        
    }
    else if(pais=="America"||pais=="Canada"||pais=="Mexico"||pais=="Bermudas"){
        Resultado="America";
   
    }
    else if(pais=="China"||pais=="Japon"||pais=="Mongolia"||pais=="india"){
        Resultado= "Asia";
    }

    else if (pais=="Marruecos"||pais=="Congo"||pais=="Botwana"||pais=="Sudafrica"){
        Resultado= "Africa";
    }
    else if(pais=="Australia"||pais=="Nueva zelanda"||pais=="Samoa"||pais=="figi"){
        Resultado= "Oceania";
    }
    else{
        console.log(" Ese pais no se reconoce")
    }
    return Resultado;
}