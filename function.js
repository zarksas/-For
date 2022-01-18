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

const getSymbol = (lang) => {
    let res = []; 
     for (let i = 0; i < lang.length; i++) {      
         if (lang[i].length > 3) {
             res += lang[i] + ' ';
         }
     }
   return res;
 } 

 const getNames = (names) => {
     let resNames = [];
     for (let i = 0; i < names.length; i++) {
    
        if (names[i][0] == 'a'.toUpperCase() || names[i][0] == 'u'.toUpperCase()) {
            resNames.push(names[i])
        }
    }
    return resNames
 }