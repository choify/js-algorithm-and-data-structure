// const countUniqueValues = (arr) => {
//     if (arr.length === 0) return 0;
//     let x = 0;
//     let y = 1;
//     let prev = 0;
    
//     for (i = 0; i < arr.length-1; i++) {
//         prev = arr[y];
//         if(arr[x] === arr[y]) {
//             y++;
//         } else {
//             y++;
//             x++;
//             arr[x] = prev;
//         }
//     }
//     return x + 1;
// }

// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7

const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j =1; j<arr.length; j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];        
        }
    }
    return i+1;
}
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
