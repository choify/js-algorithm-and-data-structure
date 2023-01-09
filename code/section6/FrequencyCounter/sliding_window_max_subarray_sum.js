` Sliding Window - maxSubarraySum  

Given an array of integers and a number,
write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
    maxSubarraySum([100,200,300,400], 2) // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
    maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
    maxSubarraySum([2,3], 3) // null

Constraints:
    Time Complexity - O(N)
    Space Complexity - O(1)
`

// 내풀이
// const maxSubarraySum = (arr, num) => {
//     if (arr.length < num) return null;
//
//     let total = 0;
//     let sumArr = new Set();
//     for (let i=0; i<arr.length-num; i++) {
//         for (let j=1; j<=num; j++) {
//             total += arr[i + j];
//         }
//         sumArr.add(total);
//         total = 0
//     }
//     console.log(sumArr);
// }
//
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39

// 솔루션
// const maxSubarraySum = (arr, num) => {
//     if (arr.length < num) return null;
//
//     let total = 0;
//     for (let i=0; i<num; i++) total += arr[i];
//
//     let currentTotal = total;
//     for (let i=num; i<arr.length; i++) {
//         currentTotal += arr[i] - arr[i-num];
//         total = Math.max(total, currentTotal);
//     }
//     return total;
// };
// let result = maxSubarraySum([2,3], 3);
// console.log(result)  // 39