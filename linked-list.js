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
