function rot13(str) { // LBH QVQ VG!
  
  var cipherText = '';

  var newCipher = [];
  
  var newString = str.split('');
  
  var caesarsCipher;
 
 
  for (i = 0; i < newString.length; i++) {
    
    if (newString[i].charCodeAt() >= 65 && newString[i].charCodeAt() <= 90){
      
       newString[i].charCodeAt();
      
    if (newString[i].charCodeAt() < 78) {
      
      newCipher[i] = newString[i].charCodeAt() + 13;
      
    }
    else if (newString[i].charCodeAt() >= 78) {
      
      newCipher[i] = newString[i].charCodeAt() - 13;
      
    }
    
    cipherText = String.fromCharCode.apply(String, newCipher);
     
    }
    
    caesarsCipher = cipherText.replace(/\0/g, ' ') + newString[i].charAt(length) ;
    
  }
  
  return caesarsCipher;
  
}

// Change the inputs below to test
rot13("SERR CVMMN!");
