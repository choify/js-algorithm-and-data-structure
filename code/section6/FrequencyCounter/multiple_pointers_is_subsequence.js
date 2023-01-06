// Multiple Pointers - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string,
// without their order changing.

// Examples:
    // isSubsequence('hello', 'hello world'); // true
    // isSubsequence('sing', 'sting'); // true
    // isSubsequence('abc', 'abracadabra'); // true
    // isSubsequence('abc', 'acb'); // false (order matters)

// Your solution MUST have AT LEAST the following complexities:
    // Time Complexity - O(N + M)
    // Space Complexity - O(1)

// 내풀이
// const isSubsequence = (str1, str2) => {
//     let left=0;
//     for (let c of str2) {
//         if (str1[left] === c) {
//             if (left === str1.length - 1) return true;
//             left ++;
//         }
//     }
//     return false;
// }
// console.log(isSubsequence('abc', 'abracadabra'));

// 솔루션 - 반복
// function isSubsequence(str1, str2) {
//     let i = 0;
//     let j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//         if (str2[j] === str1[i]) i++;
//         if (i === str1.length) return true;
//         j++;
//     }
//     return false;
// }

// 솔루션 - O(1 공간이 아닌 재귀
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}