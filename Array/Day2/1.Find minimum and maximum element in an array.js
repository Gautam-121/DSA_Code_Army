https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Arrays&sortBy=submissions
/**
 * 
 * Tc --> O(n) Sc -> O(1)
 * 
 * Comaprison --> Odd i=1 so compare n-1-> 3*(n-1) + 1  , Even i=2 so comapare n-2  -->  3*(n-2) + 1
 */


class Solution{
    getMinMax(arr,n){
        //code here
        
        let min;
        let max;
        let i;
        
        //Even number of element comapare 0-index and 1-index and decide min max
        if(n%2 == 0)
        {
            if(arr[0] > arr[1])
            {
                max = arr[0]
                min = arr[1]
            }
            else
            {
                max = arr[1]
                min = arr[0]
            }
            
            i = 2
        }
        else
        {
            //Odd number of element 
            max = arr[0]
            min = arr[0]
            
            i = 1
        }
        
        //Comare element on Bunch of 2
        while(i<n-1)
        {
            if(arr[i] > arr[i+1])
            {
                if(arr[i] > max) max = arr[i] 
                
                if(arr[i+1] < min) min = arr[i+1]
            }
            else
            {
                if(arr[i+1] > max) max = arr[i+1] 
                
                if(arr[i] < min) min = arr[i]
            }
            
            i+=2
        }
        
        return [min , max]
    }
}


/**
 * Tc --> O(n) Sc --> O(1)
 * Comaparison --> 2*(n-2) + 1
 */

class Solution{
    getMinMax(arr,n){
        //code here
        
        let min;
        let max;
        
        if(arr[0] > arr[1])
        {
            min = arr[1]
            max = arr[0]
        }
        else
        {
            min = arr[0]
            max = arr[1]
        }
        
        for(let i=2 ; i<arr.length ; i++)
        {
            if(arr[i] < min) min = arr[i]
            
            if(arr[i] > max) max = arr[i]
        }
        
        return [min , max]
    }
}