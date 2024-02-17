var groupAnagrams = function(strs) {
   let hash = new Map();
   for (let str of strs){
    let sortedStr = str.split("").sort().join("")
    //console.log(hash);
    if (hash.has(sortedStr)){
        hash.get(sortedStr).push(str)
    }else{
        hash.set(sortedStr,[str])
    }
   }
   return Array.from(hash.values())
};
let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));
