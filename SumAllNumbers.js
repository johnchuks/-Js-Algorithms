function solution(arr) {
  
  var num, arrSum = 0;
  
  for (i = 0; i < arr.length; i++) {
      
    if (arr[i] > 9 && arr[i] < 100) {
      
      arrSum +=(arr[i]);
    
        
    }
  }
  return arrSum;
}

solution ([58,100,200,10,75]);
