const arr = ['JavaScript', 'Python', 'PHP', 'Java', 'C++', 'Go', 'C#', 'Fortan', 'Scratch', 'C'];

let accumalator = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
        accumalator.push(arr[i])
    }
}

console.log(accumalator)