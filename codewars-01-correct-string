// These are solutions to a challenge on codewars. Solution 1 was my solution. Solution 2 was proposed by my mentor. Solution 3 is the solution shown on codewars.
// My mentor and I agreed Solution 2 was ideal because of its scalability. One needs only to add keys and values to the dict object to expand the dataset.

// CODEWARS CHALLENGE:
// Character recognition software is widely used to digitise printed texts.Thus the texts can be edited, searched and stored on a computer.
// When documents(especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text.You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Test.assertEquals(correct("L0ND0N"),"LONDON");
// Test.assertEquals(correct("DUBL1N"),"DUBLIN");
// Test.assertEquals(correct("51NGAP0RE"),"SINGAPORE");
// Test.assertEquals(correct("BUDAPE5T"),"BUDAPEST");
// Test.assertEquals(correct("PAR15"),"PARIS");

// SOLUTION 1

function correct(string) {
  var dict = {
    "5": "S",
    "0": "O",
    "1": "I"
  }

  var letters = string.toString().split(''); //[s,t,r,i,n,g]
  var newArray = [];
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === "5") {
      newArray.push(dict["5"])
    } else if (letters[i] === "0") {
      newArray.push(dict["0"])
    } else if (letters[i] === "1") {
      newArray.push(dict["1"])
    } else {
      newArray.push(letters[i]);
    }
  }
  return newArray.join('');
}

// SOLUTION 2
function correct(string) {
  var dict = {
    "5": "S",
    "0": "O",
    "1": "I"
  }

  return string.split('').map(letter => {
    if (Object.keys(dict).includes(letter)) {
      return dict[letter]
    } else {
      return letter
    }
  }).join('')
}

// SOLUTION 3
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
