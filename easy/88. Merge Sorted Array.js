let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 0;
let n = 3;

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);

  if (n) {
    for (let i = 0; i < n; i++) {
      nums1.push(nums2[i]);
    }
  }
  return nums1.sort(function (a, b) {
    return a - b;
  });
};

console.log(merge(nums1, m, nums2, n));
