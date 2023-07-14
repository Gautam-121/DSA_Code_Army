
https://practice.geeksforgeeks.org/problems/missing-element-of-ap2228/1?page=2&difficulty%5B%5D=0&status%5B%5D=solved&category%5B%5D=Arrays&sortBy=submissions

/**
 * 
 * Tc --> O(n) Sc --> O(1)
 */


class Solution {
    findMissing(arr,n){
       //code here

       //First Calculate Sum of n number of A.P including Missing Number
       let SumOf_AP = ((n+1)*(arr[0] + arr[n-1]))/2

       let sum = 0;

       //Sum of All the Element in Array
       for(let value of arr) sum+=value

       let missing_Number = SumOf_AP - sum

       return missing_Number
    }
}


class Solution {
    findMissing(arr,n){
       //code here
       
       // length of Array is 2 so middle is missing , So taken Avg To find Missing
       if(n == 2)
       {
           let avg = Math.floor((arr[0] + arr[1])/2)
           return avg
       }
       

       let ap1_Diff = arr[1] - arr[0]
       let ap2_Diff = arr[n-1] - arr[n-2]
       
       // if second or second last element is missing
       if(ap1_Diff == 2*ap2_Diff){
           return arr[0] + ap2_Diff
       }
       else if(ap2_Diff == 2*ap1_Diff){
           return arr[n-1] - ap1_Diff
       }
       
       // if remaining of any is missing 
       for(let i=1 ; i<n ; i++)
       {
           let missing_Number = arr[i-1] + ap1_Diff
           
           if(missing_Number !== arr[i])
           {
               return missing_Number
           }
       }
    }
}

/**
 * 
 * Array is Sorted Thing About Binary Search
 * 
 * Tc--> O(logn) sc--> O(1)
 */

class Solution {
    findMissing(arr,n){
       //code here

        // length of Array is 2 so middle is missing , So taken Avg To find Missing
       if(n == 2)
       {
           let avg = Math.floor((arr[0] + arr[1])/2)
           return avg
       }
       
       let ap1_Diff = arr[1] - arr[0]
       let ap2_Diff = arr[n-1] - arr[n-2]
       
     // if second or second last element is missing
      if(ap1_Diff == 2*ap2_Diff){
          return arr[0] + ap2_Diff
      }
      else if(ap2_Diff == 2*ap1_Diff){
          return arr[n-1] - ap1_Diff
      }
       
       let start = 0;
       let end = n-1;
       
        // if remaining of any is missing 
       while(start<=end)
       {
           let mid = Math.floor( start + (end - start)/2)

           //if mid-1 is The missing Element 
           if(mid-1>=0 && arr[mid]-ap1_Diff !== arr[mid-1])  return arr[mid]-ap1_Diff
           
           //if mid+1 is The missing Element 
           if(mid+1 <= arr.length-1 && arr[mid]+ap1_Diff !== arr[mid+1])  return arr[mid]+ap1_Diff

           //Calculate How many number is Present in between start to mid
           let diff = Math.floor((arr[mid] - arr[start])/ap1_Diff)
           
           //if number of element on left side is === diff then left side not fpund missing go right 
           if(diff == (mid - start)) start = mid + 1
           
           else{
               end = mid - 1
           }
           
       }
       
    //   if(arr[start] + ap1_Diff !== arr[start+1]) return arr[start] + ap1_Diff
       
    //   return arr[start] - ap1_Diff
       
    }
}

