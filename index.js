function soma(valorA, valorB) {
    if(valorA > 1){
        return 1;
    }
    let total = valorA + valorB;
    if(total < 5){
        return total + 1;
    }
    return total;
}


console.log(soma(soma(3, 1), soma(3, 1)));

let x = soma(1, soma(3, 3 + 3));
console.log(x)
