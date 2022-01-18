const num = [12, 23, 464, 23, 3, 5, 6, 7, 10, 20];

let accumulatorEven = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            accumulatorEven.push(num[i])
        }
    }
console.log(accumulatorEven);