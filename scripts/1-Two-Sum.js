var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length - 1; i++) {
        for(let y = 1; y < nums.length; y++) {
            if(nums[i] + nums[y + i] === target) {
                return [i, y + i];
                break;
            }
        }
    }
};