//Requirement- create function that takes array of integers and an int that is a target. average. return true if there is a pair of elements whose average equals the target
//create min and max pointers
//if avg is less than min or greater than max, return false
//while min is less than length and max is greater than 0, compare current avg or target avg
//if current avg = target avg return true
//if current avg is less than target, increase min, otherwise increase max
//return false


function averagePair(nums, target){
  let min = 0;
  let max = nums.length -1
  
  if(target > nums[max] || target < nums[min]){
      return false;
  }
//   let current;
  while(min <= max){
      let current = (nums[min] + nums[max])/2;
      if(current === target) {
          return true;
      }
      else if(current < target){
         min++; 
      } 
      else{
          max--;
      }
      
  }
  return false;
}
