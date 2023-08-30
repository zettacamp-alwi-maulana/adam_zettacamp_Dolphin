function majorityelementent(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    if (obj.hasOwnProperty(element)) {
      obj[element] = obj[element] + 1;
    } else {
      obj[element] = 1;
    }
  }
  let majority = null;
  let max = 0;
  for (let key in obj) {
    let freq = obj[key];
    if (freq > max) {
      max = freq;
      majority = key;
    }
  }
  return majority;
}

console.log(majorityelementent([3, 2, 3])); 
console.log(majorityelementent([2, 2, 1, 1, 1, 2, 2])); 
console.log(majorityelementent([2, 2, 1, 1 ])); 
console.log(majorityelementent([1, 1, 2, 2 ])); 
console.log(majorityelementent([3, 3, -2, -2 ])); 
console.log(majorityelementent([-2, -2, 1, 1 ])); 