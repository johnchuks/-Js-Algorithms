function destroyer(arr) {
  
  var arg = [];
  
  var newSeek = [];
  
  for (i = 0; i < arguments.length; i++) {
    
    arg [i] = arguments [i];
  }
  newSeek = arg[0].filter(function(item){
      return arg.indexOf(item) === -1;
    });
  
  
  
  return newSeek;
 
}

destroyer([1, 2, 3, 1, 2, 3, 4], 2, 3, 4);
