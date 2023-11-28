/**
 * Learn recursion:
 * -Factorial
 * rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5]
 * 
 */

const rangeOfNumbers = (startNum,endNum) => {
    if ( endNum < startNum) {
        return []
    }else{
        const arr = rangeOfNumbers(startNum, endNum-1)
        arr.push(endNum)
        return arr
    }
}

console.log(rangeOfNumbers(1,5));