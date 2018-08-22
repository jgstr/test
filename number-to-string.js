function numberToString(num) {

  // This was for a code challenge on CodeWars (conver a number to a string). 
  // I wanted to attempt a version that did not rely
  // on a built-in method or type juggling. I did, however, use the Math.floor,
  // but only because the point of this excercise was not to round numbers
  // but to turn a number into a string. 

  // Since I can't use type casting/juggling, I needed some way to relate digits
  // to strings. I figured an ordered array would be best. I could then access
  // a string digit by accessing its numerically-equivalent position in the array.
  // Thus, '9' can be accessed via array[9].
  
  if (num === 0) {
    return "0";
  }
  
  var stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // I needed to store the values for manipulation within the while loop.
  var number = num;
  var numString = "";
  var numMode;

  // Now this part I'm not as proud of. The modulo process works great, but the 
  // conditional for the while loop could be better, ie, not >= .01.
  // Also, the positive/negative switching is cumbersome.
  
  if (num > 0) {
    while ((number / 10) >= .01) {
    numMod = number % 10;
    number = Math.floor(number / 10);
    numString = stringNumbers[numMod] + numString;
    }
    
    return numString;
  }
  
  if (num < 0) {
    number = -num;
    
    while ((number / 10) >= .01) {
    numMod = number % 10;
    number = Math.floor(number / 10);
    numString = stringNumbers[numMod] + numString;
    }
    
    return "-" + numString;
  } 
}

// As I review it, what I would change are these:

// 1) Use the absolute value of num for the while operation
// 2) Test if num is negative. If so, add the "-" sign in front

// This would make the code shorter, since I would not have to repeat the while loop.
