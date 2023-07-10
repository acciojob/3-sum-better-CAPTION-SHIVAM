function threeSum(arr, target) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity; // Variable to track the sum closest to the target

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Left pointer
    let right = arr.length - 1; // Right pointer

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right]; // Calculate the sum of three integers

      if (sum === target) {
        return sum; // Return the sum if it exactly matches the target
      }

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum; // Update the closestSum if the current sum is closer to the target
      }

      if (sum < target) {
        left++; // Move the left pointer to increase the sum
      } else {
        right--; // Move the right pointer to decrease the sum
      }
    }
  }

  return closestSum; // Return the closest sum if exact sum is not found  
}

module.exports = threeSum;
