https://leetcode.com/problems/missing-number/description/

/**
 * 
 *Tc --> O(n) Sc --> O(1)
 */

var missingNumber = function(nums) {

    let missingNumber = 0;

    for(let i=0; i<=nums.length ; i++){
        missingNumber = missingNumber^i
    }

    for(let i=0 ; i<nums.length ; i++)
    {
        missingNumber = missingNumber ^ nums[i]
    }

    return missingNumber
};


/**
 * 
 * 
 * Tc --> O(n)  Sc -> O(1)
 * 
 * if n is very large sumOfNthNaturalNumber fat jayenga this is disadvantage
 */
var missingNumber = function(nums) {

    let n = nums.length

    let sumOfNthNaturalNumber = (n * (n + 1))/2

    let sum = 0;

    for(let value of nums)
    {
        sum+=value
    }

    return sumOfNthNaturalNumber - sum
};


/**
 * 
 * Tc --> O(n^2)
 */


var missingNumber = function(nums) {

    for(let i = 0 ; i<=nums.length ; i++)
    {
        let isEnter = true

        for(let j = 0 ; j<nums.length ; j++)
        {
            if(i==nums[j])
            {
                isEnter = false
                break;
            }
        }

        if(isEnter) return i
    }
};


/**
 * 
 * Tc--> O(n) Sc--> O(n)
 */

var missingNumber = function(nums) {

    let temp_Array = new Array(nums.length + 1).fill(false)

    for(let i = 0 ; i<nums.length ; i++)
    {
        temp_Array[nums[i]] = true
    }

    for(let i = 0 ; i<temp_Array.length ; i++)
    {
        if(!temp_Array[i]) return i
    }
};