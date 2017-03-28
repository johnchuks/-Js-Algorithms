function getIndexToIns(arr, num) {
   
  var getIndx;
  
  var newArr = arr.sort(function(a, b){
    return (a - b);
  });
  
  for (i = 0; i < newArr.length; i++) {
    
    if (newArr[i] > num || newArr[i] === num) {
      
      return i;
    }
    
        
  }
 
  return newArr.length;
}
 

getIndexToIns([40,60], 50);
