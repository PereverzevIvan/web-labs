// Задание №1
function countSandwiches (obj) {
    const bread = obj['bread'];
    const cheese = obj['cheese'];
    let sandwiches = parseInt(bread / 2);
    if (sandwiches > cheese) {
        sandwiches -= (sandwiches - cheese);
    }

    console.log(sandwiches);
}

console.log("Задание №1")
countSandwiches({bread: 12, cheese: 5});

// Задание №2
function countDigits (n) {
    for (var i = 0; n >= 1; i++) {
        n /= 10;
    }
    return i;
}

function formatNum (len, num) {
    return num + ' '.repeat(len - countDigits(num));
}

function generateMultiplicationTable (limit) {
    const lenNum = countDigits(limit * limit);
    let line = ' '.repeat(lenNum);
    for (let i = 1; i < (limit+1); i++) {
        line += ' ' + formatNum(lenNum, i);
    }
    console.log(line);
    for (let i = 1; i < (limit+1); i++) {
        line = '';
        for (let j = 1; j < (limit+1); j++) {
            line = line + formatNum(lenNum, i * j) + ' ';
        }
        console.log(formatNum(lenNum, i) + ' ' + line);
    }
}

console.log("\nЗадание №2")
generateMultiplicationTable(5);

// Задание №3
function formatString(len, str) {
    return str + ' '.repeat(len - str.length);
}

function showQuote(list, cont) {
    const maxWordLen = list.sort((val1, val2) => val1.length < val2.length ? 1: -1)[0].length;
    console.log(cont.repeat(maxWordLen + 4));
    list.forEach(word => {
        console.log(cont + ' ' + formatString(maxWordLen, word) + ' ' + cont);
    });
    console.log(cont.repeat(maxWordLen + 4));
}

console.log("\nЗадание №3")
showQuote(['Hello12121', 'World', 'In', 'JS'], '+')

// Задание №4
function combineArrays(list1, list2) {
    let maxLen = Math.max(list1.length, list2.length);
    let newList = [];
    for (let i = 0; i < maxLen; i++) {
        if (list1.length != 0) {
            newList.push(list1.shift());
        }
        if (list2.length != 0) {
            newList.push(list2.shift());
        }
    }
    console.log(newList);
}
console.log("\nЗадание №4");
combineArrays([1, 2, 3], ['a', 'b', 'c', 'd']);

// Задание №4
function countUniqueValues(list) {
    let values = {};
    list.forEach(i => {
        if (values[i] === undefined) {
            values[i] = 1;
        }
        else {
            values[i] += 1;
        }
    });
    console.log(values);
}

console.log("\nЗадание №5");
countUniqueValues([1,2,1,2,3,4,2,5]);