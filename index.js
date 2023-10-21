function isPalindrome(word) {

  wordCompared  = reverseWord(word)
  return word === wordCompared

  function reverseWord(word) {
    var newWord= "";
    for (var i = word.length - 1; i >= 0; i--) { 
        newWord += word[i]
      }

      return newWord
    }

  }

/* 
  Add your pseudocode here

  check if las letter is equal to first letter 
  check if second to last letter is equal to second letter 
  so on untill midde of word 

  this should measure the word and find middle to know where it stops maybe dividing
  lengh by 2? 

  OR 

  reverse string and see if they are equeal-but how do I reverse a string? 

  maybe split word? then find a way to reverse the indexs in the array? a loop that grabs each letter and makes a new string? 

  last step return true or false 
*/ 

/*
  Add written explanation of your solution here.

  I initialy had two ideas of how it might be acomplished. The firts idea was going to check if letter matched using index of characters. However, I wasn't sure how to make sure the loop 
  stppped at the right number of iterations.  

  for the second I thougth maybe reversing the string then checking if it was still the same. I google how to reverse a string and found several methods. I chose to use a loop
  because I needed more practice with loops. 

  In my code isPalindrome calls on a function , reverseWord, then stores that value in a varialbe called wordToCompare.  The reverserWord function uses a loop to create a new string where the 
  orther of the letters in words are reversed. It does this by creating an emty string that is then populated one letter at a time with the characters of the word starting with the one at the 
  end (lenght- 1). Once it has created a new string it returns it. 

  Finally I have the function isPalindrome return a true or false using a comparative statement. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true ");
  console.log("=>", isPalindrome("civic"));

  console.log("Expecting: true ");
  console.log("=>", isPalindrome("level"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("yisel"));
}

module.exports = isPalindrome;
