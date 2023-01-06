// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
    // areThereDuplicates(1, 2, 3) // false
    // areThereDuplicates(1, 2, 2) // true
    // areThereDuplicates('a', 'b', 'c', 'a') // true

// Restrictions:
    // Time - O(n)
    // Space - O(n)

// Bonus:
    // Time - O(n log n)
    // Space - O(1)

// =================================================================
// 내풀이
// const areThereDuplicates = (...args) => {
//     // console.log(args)
//     let frequencyCounter = {};
//     for (let val of args) {
//         frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
//     }
//     for (let key in frequencyCounter) {
//         console.log(key, frequencyCounter[key])
//         if (frequencyCounter[key] > 1) return true;
//     }
//     return false;
// }
//
// console.log(areThereDuplicates(1,2,2))

// =================================================================
// 빈도 수 세기 솔루션
// function areThereDuplicates() {
//     let collection = {}
//     for(let val in arguments){
//         collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     for(let key in collection){
//         if(collection[key] > 1) return true
//     }
//     return false;
// }

// 다중 포인터 솔루션
// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//         if(args[start] === args[next]){
//             return true
//         }
//         start++
//         next++
//     }
//     return false
// }

// One Liner 솔루션
function areThereDuplicates() {
    console.log(new Set(arguments));
    return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates(1,2,2))
