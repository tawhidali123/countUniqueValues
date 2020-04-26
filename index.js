// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in that array. There can be negative numbers in the array, but will always be sorted.

// examples:
// countUniqueValues([1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([-1,-1,0,1,2]) // 4


let countUniqueValues = function(arr){
  if(arr.length === 0) { return 0}
  let pointer = 0

  for(let i = 1; i < arr.length; i++){
    if(arr[pointer] !== arr[i]){
      pointer ++
      arr[pointer] = arr[i]
    }
  }

  return pointer + 1

}

// countUniqueValues([-1,-1,-1,0,1,2,3,3,3,3])
// countUniqueValues([1,2,3,3])
// countUniqueValues([1,2])
countUniqueValues([])