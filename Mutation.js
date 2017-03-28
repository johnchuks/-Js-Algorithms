function mutation(arr) {
 
 var newStr;
 
 var newArr;
 
 newArr = arr[0].toLowerCase();
 newStr = arr[1].toLowerCase().split('');
 
 
 
 for (i = 0; i < newStr.length; i++) {
   
    if (newArr.indexOf(newStr[i]) < 0) {
   
       return false;
   
    }
 
 }
 
 return true;
 
}
  


mutation(["hello", "hey"]);
