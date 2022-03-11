function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
//while there is data to still look at in both pointers do this then do that or return results...
    while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j])
        j++;
      }
    } 
  //two more while loops to finish out the i and j two pointers
  
    return results;
}


console.log(merge([1, 10, 50], [2, 14, 99, 100]))
//=> [1, 2, 10, 14, 50] we finished the first array and the while loop is done or break out. Now we stil lhave the remaining items in the 2nd array to sort.






/* 
we want to merge these arrays
([1, 10, 50], [2, 14, 99, 100])
POSSIBLE APPROACH(S)
-->smallests items first in new array so ascending order, not descending order
--> 2 pointers  
--> while loops 

pseudo brainstorm:
merge([1, 10, 50], [2, 14, 99, 100])
  * two poniters perspective
let i = 0 and j = 0;
       i 
merge([1, 10, 50], [2, 14, 99, 100])
                    j
--> between 1 and 2, i = 1 is smaller so we will take i = 1 and move the i pointer over to th the right.
* NEW ARRAY [1...]
          i 
merge([1, 10, 50], [2, 14, 99, 100])
                    j
--> between 20 and 2, 2 is smaller so we will move j = 2 into the new array
* NEW ARRAY [1, 2...]
          i 
merge([1, 10, 50], [2, 14, 99, 100])
                        j
--> between 10 and 14, 10is smaller so we will move i= 10 into the new array
* NEW ARRAY [1, 2, 10...]
               i 
merge([1, 10, 50], [2, 14, 99, 100])
                        j
--> between 0 and 2, 2 is smaller so we will move j = 2 into the new array
* NEW ARRAY [1, 2, 10, 14...]
           * i first away is done, now lets sort the remaining array
merge([1, 10, 50], [2, 14, 99, 100])
                        j
--> looking at the j pointer we have left 99 and 100. Our new array is already sorted and the first i pointer is done. Anything values larger and remaining after 50 is sorted into the new array.
* NEW ARRAY [1, 2, 10, 14, 50...]
               
merge([1, 10, 50], [2, 14, 99, 100])
                           j
* NEW ARRAY [1, 2, 10, 14, 50, 99...]
               
merge([1, 10, 50], [2, 14, 99, 100])
                                j
         * NEW ARRAY [1, 2, 10, 14, 50, 100] *
               
merge([1, 10, 50], [2, 14, 99, 100]) sort between 2 pointers done.
                           
*/