const getSum = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res
}

const getPositiveNumber = (arr) => {
    let sumP = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sumP += arr[i];
        }
    }
}

