const num = [34, 123, 656, -2, 23, -54, 23, 645, -46, 23];

let accumalator = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
        accumalator += num[i];
   }
}

console.log(accumalator)