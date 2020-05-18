 function Paieses(pais){
     let Europa=["España","Francia","Suiza","Andorra","Alemania"];
     let America=["America","Mexico","CAnada","Groenlandia","Bermudas"];
     let  Asia=["China","Japon","Tailandia","Mongolia","India"];
     let Africa=["Marruecos","Congo","Botwana","SudAfria","Somalia"];
     let Oceania=["Australia","Nueva Zelanda","Samoa","Fiyi","Tonga"];
     let Continentes=[Europa,America,Asia,Africa,Oceania];
     let Cont=["Europa","America","Asia","Africa","Oceania"];
     for(let i = 0;i<Continentes.length;i++){

         for(let a = 0;a<Continentes[i].length;a++){

             if(Continentes[i][a]==pais){
                 
                 console.log(Cont[i]);
             }

         }
     }


}