// https://practice.geeksforgeeks.org/problems/missing-element-of-ap2228/1?page=2&difficulty%5B%5D=0&status%5B%5D=solved&category%5B%5D=Arrays&sortBy=submissions


// Tc -- O(n)  Sc --> O(1)  --> Array is UnSorted Apply Linear Search To find The Element
class Solution {
    search(arr, N, X) {
        // write your code here
        for(let i = 0 ; i<N ; i++)
        {
            if(arr[i] === X) return i
        }
        
        return -1
    }
}

// Tc -- O(logn)  Sc --> O(1)  --> Array is Sorted Apply Binary Search To find The Element
// https://leetcode.com/problems/binary-search/
var search = function(nums, target) {

    let n = nums.length
    
       let start = 0;
        let end = n-1;
        
        while(start<=end)
        {
            //Find mid 
            let mid = Math.floor(start + (end-start)/2)
            
            if(nums[mid] === target) return mid
            
            else if(nums[mid] > target) end = mid - 1
            
            else {
                start = mid + 1
            }
        }
        
        return -1
};


