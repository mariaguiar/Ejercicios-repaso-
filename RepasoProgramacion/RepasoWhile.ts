
//Reto 3

let n1 = 30;
let i= 1;

while (i<=n1)
{
   console.log (i);
   i+=2;
}

//Reto 7

function nombres(array)
{
 let i = 0;
 let m = true;
 while (i<array.length && m)
 {
  if (!array[i].startsWith("M"))
  {m = false}
  i++;
 }
 return m;
}

console.log(nombres(["Maria", "Pepe"]));
