`
collectStrings

Write a function called collectStrings which accepts an object 
and returns an array of all the values in the object that have a typeof string

collectStrings(obj) // ["foo", "bar", "baz"])
`

// collectStrings 솔루션: Helper 메소드 재귀 버전
const collectStringsHelper = (obj) => {
    let stringsArr = [];
    const gatherStrings = (o) => {
        for(let key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
    gatherStrings(obj);
    return stringsArr;
}

// collectStrings 솔루션: 순수 재귀 버전
const collectStringsPure = (obj) => {
    let stringsArr = [];
    for(let key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStringsPure(obj[key]));
        }
    }
    return stringsArr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])