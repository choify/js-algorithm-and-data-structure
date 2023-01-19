`Binary Search Exercise

Write a function called binarySearch which accepts a sorted array
and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch 
    - you can read how to implement it here 
        - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
        - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:
    binarySearch([1,2,3,4,5],2) // 1
    binarySearch([1,2,3,4,5],3) // 2
    binarySearch([1,2,3,4,5],5) // 4
    binarySearch([1,2,3,4,5],6) // -1
    binarySearch([
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 10) // 2
    binarySearch([
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 95) // 16
    binarySearch([
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 100) // -1
`
// 내풀이
// const binarySearch = (arr, val) => {
//     let leftPnt = 0;
//     let rightPnt = arr.length - 1;
//     let centerPnt = Math.ceil((rightPnt + leftPnt)/2);
//     while (leftPnt < rightPnt) {
//         if (arr[centerPnt] === val) return centerPnt;
//         if (arr[centerPnt] < val) leftPnt = centerPnt + 1;
//         else rightPnt = centerPnt - 1;
//         centerPnt = Math.ceil((rightPnt + leftPnt)/2);
//     }
//     return -1;
// }

// 강사 솔루션
const binarySearch = (arr, elem) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}