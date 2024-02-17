let nums = [1,2,3,1]
let k = 3
var containsNearbyDuplicate = function(nums, k) {
    let obj = {}
    for(let i = 0 ; i < nums.length ; i++){
        if (obj[nums[i]] == undefined){
            obj[nums[i]] = i
        } else {
            if (Math.abs(obj[nums[i]] - i ) <= k){
                return true;
            } else{
                obj[nums[i]] = i
            }
        }
    }
    return false;
};

console.log(containsNearbyDuplicate(nums,k));