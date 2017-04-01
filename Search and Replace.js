function myReplace(str, before, after) {
  
 
  var arr = []; // create an empty array
  
  var newStr = []; // create an empty array for the replaced string
  
  beforeArray  = new Array(before); // create an array of length before
  
  var charNew;
  

  // iterate through the array and check if any word in str is found in the before array
  for (i = 0; i < beforeArray.length; i++) {
    
    if(str.indexOf(beforeArray[i]) >= 0) {
      
        arr.push(beforeArray[i]); // push the word into an empty
        
        charNew = arr[i].charAt(0); // select the first character of the string in arr
      
        newStr = str.replace(arr, after);
  
      }
      
       if (charNew === charNew.toUpperCase()) { // check if first character in arr is in uppercase
     
        var afterNew = after.charAt(0).toUpperCase() + after.slice(1);
        
        newStr = str.replace(arr, afterNew);
        
       }
      
  }
    
  
  return newStr;
}

myReplace("He is sleeping on the couch", "sleeping", "sitting");
