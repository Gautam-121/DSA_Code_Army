https://practice.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1?page=2&difficulty%5B%5D=0&category%5B%5D=Arrays&sortBy=submissions
/**
 * 
 * Tc --> O(n) Sc--> O(1)
 * 
 */

//Order Not Matter

class Solution {
    segregateElements(arr, n) {
        //code here

        //Order Is Not Matter all Positive Toward The left and all negative Toward  the Right
        let i = 0;
        let j = n-1;

        while(i<j)
        {
            while(i<j && arr[i] >= 0) i++

            while(i<j && arr[j] < 0) j--

           [ arr[i],arr[j]] = [ arr[j],arr[i]]

           i++
           j--
        }

    }
}

class Solution {
    segregateElements(arr, n) {
        //code here

        //Order Is Not Matter all Positive Toward The left and all negative Toward  the Right
        let i = 0;
        let j = 0;

        while (i < n) {
            if (arr[i] > 0) {
                [arr[i], arr[j++]] = [arr[j], arr[i]]
            }
            i++
        }

    }
}


//Order Is Matter
/**
 * 
 * Tc --> O(n + n) --> O(2n)
 * Sc --> O(n)
 * 
 */

class Solution {
    segregateElements(arr, n) {
        //code here

        let pos = []
        let neg = []

        //Push all Positive To Pos Array and All Negative to Neg Array
        for (let i = 0; i < n; i++) {
            if (arr[i] < 0) neg.push(arr[i])
            else pos.push(arr[i])
        }

        let i = 0;
        let j = 0;

        //Arrange All postive First in Main Array then All Negative
        while (j < pos.length) {
            arr[i++] = pos[j++]
        }

        j = 0

        while (j < neg.length) {
            arr[i++] = neg[j++]
        }

    }
}


/**
 * 
 * Tc --> O(n*window)
 * SC --> O(1)
 * 
 */

class Solution {
    segregateElements(arr, n) {
        //code here

        let i = 0;
        let j = 0;

        while (j < n) {

            if (arr[j] < 0) j++;

            else {
                for (let k = j; k > i; k--) {
                    [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]]
                }
                i++;
                j++;
            }
        }
    }
}
