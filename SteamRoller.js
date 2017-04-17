function steamrollArray(arr) {
    
  var steam;
  
  var merge;
  
  var drop = [];
  
  var flat;
  
  steam = [].concat.apply([], arr); // concat to clear the first array brackets
  
  
  for (i  = 0; i < steam.length; i++) { // iterate through the new array steam
    
    if(Array.isArray(steam[i])) { // check for sub arrays and iterate to flatten them
      
       var count =0;
    
          while(Array.isArray(steam[i]) && count < steam.length) { // use the while loop to flatten them
      
             flat = [].concat.apply([], steam[i]);
             
             drop.push(flat);
      
            count++;
            
            break;
        }
    }
    
    else { // if the arrays steamrolled push to an empty array
      
      drop.push(steam[i]);
    }
      
  }
    
 var steamRolled = [].concat.apply([], drop); // Do another steamrolling to remove the last sets of subarrays
 
  
  
  
  return steamRolled;

}

steamrollArray([1, [2], [3, [[4]]]]);
