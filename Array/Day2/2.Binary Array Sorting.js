https://practice.geeksforgeeks.org/problems/binary-array-sorting-1587115620/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Arrays&sortBy=submissions
/**
 * Tc --> O(nlogn)
 */
// Sort The Array in Increasing Order
class Solution {
    //Function to sort the binary array.
    binSort(A, N)
    {
        //your code here
        A.sort((a,b) =>a-b)
    }
}

/**
 * 
 * Tc --> O(n)
 * Sc -> O(n)
 * 
 */

class Solution {
    //Function to sort the binary array.
    binSort(A, N)
    {
        //your code here
       let zero = []
       let one = []
       
       //Store all Zero to Zero Array And All One To One Array
       for(let i=0 ; i<N ; i++)
       {
           if(A[i] === 0)
           {
               zero.push(A[i])
           }
           else
           {
               one.push(A[i])
           }
       }

       let i = 0;
       let j = 0;
       
       //Arrange All zero First and One after
       while(j<zero.length)
       {
           A[i++] = zero[j++]
       }
       
       j=0
       
       while(j<one.length)
       {
           A[i++] = one[j++]
       }
    }
}



/**
 * 
 * Tc --> O(n)
 * 
 */

class Solution {
    //Function to sort the binary array.
    binSort(A, N)
    {
        //your code here
       let i = 0;
       let j = 0;

       //if at any point if found zero repalce i,j index
       while(i<N)
       {
           if(A[i] === 0)
           {
               [A[i],A[j]] = [A[j],A[i]]
               j++
           }
           
           i++
       }
    }
}