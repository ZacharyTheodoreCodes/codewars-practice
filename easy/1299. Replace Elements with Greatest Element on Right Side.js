var replaceElements = function(arr) {
    const n = arr.length;
    if ( n == 1){
        return [-1]
    }

    let maxNum = arr[n-1]
    arr[n-1] = -1;

    for (let i = n-2; i >= 0; i--){
        let currentNum = arr[i]
        arr[i] = maxNum;
        maxNum = Math.max(maxNum,currentNum)
    }
    return arr
};
let arr = [17,18,5,4,6,1]
console.log(replaceElements(arr));
