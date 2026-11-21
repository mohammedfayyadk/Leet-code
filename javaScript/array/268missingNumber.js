

const nums = [3, 0, 1];


let missingNumber = function(nums) {

for (let i = 0 ; i <= nums.length ; i++){
    if(!nums.includes(i)){
        return i
    }
}

    
};