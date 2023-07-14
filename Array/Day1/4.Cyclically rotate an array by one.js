

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 
 * Tc --> O(n) Sc --> O(n)
 */
var rotate = function(nums, k) {

    let new_Arr = new Array(nums.length)

    k = k%nums.length

    if(k==0 || k==nums.length) return

    if(k<0) k + nums.length

    let j = 0;

    let i = nums.length - k

    // Fill new_Arr from position k to arr.length in starting of new_Arr
    while(i<nums.length)
    {
        new_Arr[j++] = nums[i++]
    }

    i = 0;

    //Fill new_Arr from position 0 to nums.length-k
    while(i<nums.length-k)
    {
        new_Arr[j++] = nums[i++]
    }

    for(let i = 0 ; i<nums.length ; i++)
    {
        nums[i] = new_Arr[i]
    }

};

var rotate = function(nums, k) {


    let new_Arr = new Array(nums.length).fill(0)

    k = k%nums.length

    if(k==0 || k==nums.length) return

    if(k<0) k + nums.length

    //fill new_Arr from nusm i = 0 in new_Arr position i+k
    for(let i=0 ; i<nums.length ; i++)
    {
        new_Arr[(i+k)%nums.length] = nums[i]
    }

    for(let i=0 ; i<nums.length ; i++)
    {
        nums[i] = new_Arr[i]
    }
};

/**
 * 
 * Tc --> O(n) Sc --> O(1)
 * 
 */

function reverse(start , end , arr)
{
    while(start < end)
    {
        [arr[start++] , arr[end--]] = [arr[end] , arr[start]]
    }
}

var rotate = function(nums, k) {


    let new_Arr = new Array(nums.length).fill(0)

    k = k%nums.length

    if(k==0 || k==nums.length) return

    if(k<0) k + nums.length

    //reverse whole Array
    reverse(0 , nums.length-1 , nums)
    //reverse from position k to nums.length
    reverse(k , nums.length-1 , nums)
    //reverse from postion 0 tp k-1
    reverse(0 , k-1 , nums)

    

    
};
