// const validAnagram = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};

//     for (let val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
//     }

//     for (let val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
//     }

//     // console.log(frequencyCounter1);
//     // console.log(frequencyCounter2);

//     for (let key in frequencyCounter1) {
//         if (!(key in frequencyCounter2)) {
//             return false;
//         }
//         if (frequencyCounter2[key] !== frequencyCounter1[key]) {
//             return false;
//         }
//     }
//     return true;
// }
// validAnagram('anagram', 'nagaram');

const validAnagram = (first, second) => {
    if (first.length !== first.length) {
        return false;
    }
    const lookup = {}
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];

        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup);
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;            
        }
    }
    for (key in lookup) {
        if (lookup[key]) {
            return false;
        }
    }
    return true;
}
validAnagram('anagram', 'nagaram');
