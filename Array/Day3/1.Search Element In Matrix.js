https://leetcode.com/problems/search-a-2d-matrix/description/

/**
 * 
 * Tc --> O(m*n) Sc -> O(1) 
 */

var searchMatrix = function(matrix, target) {

    let column = matrix[0].length

    for(let row=0 ; row<matrix.length ; row++)
    {
        for(let col = 0; col<column ; col++)
        {
            if(matrix[row][col] === target)
            {
                return true
            }
        }
    }
    return false
};


/**
 * 
 *Tc --> (nlogm)  Sc --> O(1)
 */

var searchMatrix = function(matrix, target) {

    for(let row = 0 ; row<matrix.length ; row++)
    {
        let start = 0;
        let end = matrix[row].length-1
 
        while(start <= end)
        {
            let mid = Math.floor( start + (end - start)/2)
 
            if(matrix[row][mid] === target) return true
 
            if(matrix[row][mid] > target) end = mid - 1
 
            else start = mid + 1
        }
    }
 
    return false
 };


/**
 * Tc --> O(m+n) Sc --> O(1)
 */

var searchMatrix = function(matrix, target) {

    let i = 0
    let j = matrix[0].length-1
 
    while(i<matrix.length && j>=0)
    {
        if(matrix[i][j] === target ) return true
 
        if(matrix[i][j] > target) j--
 
        if(matrix[i][j] < target) i++
    }
 
    return false
 };


