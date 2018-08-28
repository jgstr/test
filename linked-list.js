var LinkedList = function() {

  // In this case, this.head is the same thing as this.next for the other nodes
  this.head = null;
  this.length = 0;

  this.addData = function(data) {
    const newNode = {data};
    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    console.log("Successfully added " + data + ". The list is now " + this.length + " pieces long.");
  }

  this.print = function() {
    var stringCapture = "";

    var currentNode = this.head;

    for (var nodes = this.length; nodes > 0; nodes--) {
      stringCapture = stringCapture + " " + currentNode.data;
      currentNode = currentNode.next;
    }

    console.log("List items:" + stringCapture);
  }

}

/* I wanted to create a Linked List data structure in Javascript
   without relying on the class syntax, of which only confuses me. */

// This is a LinkedList in Javascript as demonstrated by the book
// Data Structures and Algorithms with Javascript by Michael
// McMillan. I re-coded by hand only the features I was interested
// in memorizing. I also made changes where I saw fit. This is a
// work in progress as I studying Data Structures and Algorithms.

function LinkedList() {

  // properties

  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];

  // methods

  this.append = append;

  // .find is also used as a helper function
  this.find = find;
}

function append(element) {

  // listSize++ returns the original value of listSize
  // then increments listSize by 1 (so listSize is 'ready'
  // for the next element)
  this.dataStore[this.listSize++] = element;

}

function find(element) {

  // I don't like using 'i' for development. I think iterators 
  // like 'i' and 'j' are not helpful when building programs,
  // at least not for me. I prefer to use descriptive yet short
  // iterator variables, like 'item' or 'count.' But for the
  // purposes of this project, I am following the code in the 
  // book.

  for (var i = 0; i < this.dataStore.length; ++i) {

    if (this.dataStore[i] === element) {
      return i;
    
    }
  } // end for

  return -1
}

function remove(element) {
  var foundAt = this.find(element);

  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }

  return false;
}
