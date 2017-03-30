function diffArray(arr1, arr2) {
  // compare two arrays arr1 and arr2. Return a new array of an item found in only one of the array
  var newArr = [];
  
  var symArr = [];

// this loop checks for items in arr2 that is not in arr1
for (i = 0; i < arr2.length; i++) {
  
  
  if (arr1.indexOf(arr2[i]) === -1) {
   
   symArr.push(arr2[i]);
   
  }
  
}
  // this loop checks for items in arr1 that is not in arr2
  for (j = 0; j < arr1.length; j++) {
    
    if (arr2.indexOf(arr1[j])===-1) {
      
      symArr.push(arr1[j]);
    }
  }
  
  // this loop returns both arrays as a single array if all the items are present in both arr1 and arr2
  for (i = 0; i < arr1.length; i++) {
    
    var count =0;
    
    for (j = 0; j < arr2.length; j++) {
      
      if (arr1[i] === arr2[j]){
        
        count++;
      }
     if (count > 1) {
       
       symArr = arr1.concat(arr2);
     } 
    
  }
  
  }

  
  return symArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
