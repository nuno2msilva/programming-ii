console.time("newFibo");
const newFibo = (number) => {
    if (number === 0) return 0;
    if (number === 1) return 1;
    return newFibo(number-2) + newFibo(number-1);
}
console.info(newFibo(10000));
console.timeEnd("newFibo");