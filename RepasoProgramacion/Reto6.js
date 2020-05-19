function Par(Array) {
    var Resultado = false;
    var i = 0;
    while (Array[i] % 2 == 0) {
        Resultado = true;
    }
    return Resultado;
}
console.log(Par([2, 3, 4, 5]));
