// const selectionSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i;
//         for (let j = 0; j < arr.length; j++) {
//             for (let j = i+1; j < arr.length; j++) {
//                 if (arr[j] < arr[lowest]) {
//                     lowest = j;
//                 }
//             }
//         }
//         if (i !== lowest){
//             console.log(arr);
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//             console.log("SWAPPING TO: ", arr);
//             console.log("==============================");
//         }
//     }
//     return arr;
// }

//ES2015 Version
const selectionSort = (arr) => {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = 0; j < arr.length; j++) {
            for (let j = i+1; j < arr.length; j++) {
                if (arr[j] < arr[lowest]) {
                    lowest = j;
                }
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
}
console.log(selectionSort([0,2,34,22,10,19,17]));
