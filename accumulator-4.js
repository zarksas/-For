
const names = ['Muskhab', 'Alvi', 'Ibrahim', 'Muhammad', 'Umar', 'Shamil', 'Islam', 'Adam', 'Turpal', 'Tamirlan'];

let accumalator = [];

for (let i = 0; i < names.length; i++) {
    if (names[i][0] == 'a'.toUpperCase()) {
        accumalator.push(names[i])
    }
}
console.log(accumalator)