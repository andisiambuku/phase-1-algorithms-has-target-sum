function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const num= target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === num) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  loop over the array 
  for the current number, identify a complementary number that adds to our target
  
  loop over the remaining numbers in the array
    check if any of the remaining numbers is num
      if so, return true
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  Using a for loop, we iterate over the array and we identify the complementary number 
  that is summed in the target.
  we keep looping to check if any of the numbers left is complementary
  and return true and if not return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));


  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
