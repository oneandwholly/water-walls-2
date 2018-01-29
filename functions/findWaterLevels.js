const findWaterLevels = (heights) => {
  let left = 0;
  let right = heights.length - 1;
  let left_max = 0;
  let right_max = 0;
  
  let results = heights.map(height => [height, 0]);
  
  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] >= left_max) {
        left_max = heights[left];
      } else { 
        results[left][1] += (left_max - heights[left]);
      }
      left++;
      } else {
        if (heights[right] >= right_max) { 
          right_max = heights[right];
        } else { 
          results[right][1] += (right_max - heights[right]);
        }
        right--;
      }
  }
    return results;
}

module.exports = findWaterLevels;