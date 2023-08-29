function containsDuplicate(nums) {
  let frequency = {};
  for (let num of nums) {
    if (frequency[num]) {
      return true;
    } else {
      frequency[num] = true;
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); 
console.log(containsDuplicate([1, 2, 3, 4])); 
console.log(containsDuplicate([3, 3, 3, 3])); 
console.log(containsDuplicate([3, -3, 4, -2])); 
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); 

