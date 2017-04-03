function translatePigLatin(str) {
  var arr =[];
  
  var newArr =[];
  
  var vowels = 'aeiou';
  
  var vowelSuffix = 'way';
  
  var consonSuffix = 'ay';
  
  var newLatin;
  
  var firstChar = str.charAt(0); // select the first character in the string
  
  var secondChar = str.charAt(1); // select the second character in the string
   
  var vowelSplit = vowels.split(''); // create an array of vowels
 
  var pigLatin;
  
  if (vowelSplit.indexOf(firstChar) === -1) { // check if the first character is a consonant and push it to an empty array
    
    arr.push(firstChar);
  }
  
  if (vowelSplit.indexOf(secondChar) === -1) { // check if the second character is a consonant and push it to an empty array
    
    arr.push(secondChar);
    
  }
  
  newLatin = arr.join('') + consonSuffix; // jcreate a new string with the consonant suffix
  
  
  if(newLatin.length === 3) { // check if the new string is equivalent to the length and slice accordingly
    
    newArr = str.slice(1);
  }
  else if (newLatin.length > 3) {
    
    newArr = str.slice(2);
  }
  
  pigLatin = new Array(newArr); // create a new array of the sliced string
  
  pigLatin.push(newLatin); // push newLatin string to the pigLatin array
  

  var newWord = pigLatin.join(''); // create a new string by using the join method
  
  
  if (vowelSplit.indexOf(firstChar) >= 0) { // check if the first character in the str is a vowel and create a new word accordingly
    
      newWord = str + vowelSuffix;
  }
  
  
  
  return newWord;
  
 
  
}

translatePigLatin("eight");
