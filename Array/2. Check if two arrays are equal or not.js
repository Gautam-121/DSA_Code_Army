
https://practice.geeksforgeeks.org/problems/check-if-two-arrays-are-equal-or-not3847/1?page=1&difficulty%5B%5D=-1&category%5B%5D=Arrays&sortBy=submissions

/**
 * Using HashMap Store Frequency of Each Character of Array One Then
 * After that perform loop on Array Two and all element present as well as
 * there frequency uis Same
 * 
 * Tc--> O(n + n) -> O(n)  , Sc --> O(n)
 */

class Solution {
    //Function to check if two arrays are equal or not.
    check(A,B,N){
        // code here
        
        if(A.length !== B.length) return 0
        
        let frequency_Map = new Map()
        
        //Store Frequency OF Array In HashMap
        for(let value of A)
        {
            frequency_Map.set(value , (frequency_Map.get(value) || 0) + 1 )
        }
        
        for(let value of B)
        {
            //If Present
            if(frequency_Map.has(value))
            {
                //Decrease The frequency of that perticular Character
                frequency_Map.set(value , frequency_Map.get(value) - 1 )
                
                //At any Point if the frequency of that chrarcter is zero delete from the HashMap
                if(frequency_Map.get(value) === 0)
                {
                    frequency_Map.delete(value)
                }
            }
            else
            {
                //If At any Point if a any single element not present return 0
                return 0
            }
        }

        // If loop B is Completely working That means Array A and Array B Are Equal
        return 1
    }
    
}


/**
 * 
 * Tc --> O(nlogn + nlogn + n) --> O(nlogn) Sc --> O(1)
 * 
 */

class Solution {
    //Function to check if two arrays are equal or not.
    check(A,B,N){
        // code here
        
        A.sort((a,b)=>a-b)
        B.sort((a,b)=>a-b)
        
        for(let i = 0 ; i<N ; i++)
        {
            if(A[i] != B[i]) return 0
        }
        
        return 1
    }
    
}



