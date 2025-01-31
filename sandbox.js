console.time("bigo");
const n = 500;
for (let i = 0; i < n; i++) {
 for (let j = 0; j < n; j++) {
    console.log(i, j);
}
}
console.timeEnd("bigo");


1  2  3  4  5  6  7  8  9  10 11 12 13
0  1  3  5  7  9  11 13 21 34 55 89 144

function fibbonaci(number){
    number = (number-2) + (number-1);
    return number;
}


example: fibbonaci(20)
20 = (20-2=18) + (20-1=19) = 37;
return 37

function fibbonaci(number){
    fo
}

example: fibbonacci

to calculate fibbonacci, i have to...
for each number until I reach the objective (ex: 7),
i have to calculate each previous number in the sense of... 
1 = 0 + 0 = 0
2 = 0 + 1 = 1
3 = 2 + 1 = 3
4 = 2 + 3 = 5
5 = 4 + 3 = 8

placeholder = (a-2) + (a-1);

a = counter up

function fibbonacci(n){ /* n is the number given by the user */
/* fuck you dumbass dont count down, count upwards you lil bitch */
a = 0;
b = 1;
for ( i = 2; i )

}


console.time("fibonacci")
function fibonacci(number){
    let sequencia = [];
    if (number === 0) return 0;
    sequencia.push(0);
    if (number === 1) return sequencia [0];
    sequencia.push(1);
    for (let x = 2; x <= number; x++){
        const proximo = sequencia[x-1] + sequencia[x-2];
        sequencia.push(proximo);
    }
    return sequencia[number];
}
console.info(fibonacci(4000))
console.timeEnd("fibonacci")

const newFibo = (number) => {
    if (number === 0) return 0;
    if (number === 1) return 1;
    return newFibo(number-2) + newFibo(number-1);
}

