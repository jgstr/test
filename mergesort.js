// This merge sort algorithm in Javascript is from the Data Structures and Algorithms book by Michael McMillan.

function merge(left, right) {
  // This function merges the arrays

  var result = [];
  var leftLen = left.length;
  var rightLen = right.length;

  while (leftLen > 0 || rightLen > 0) {

    if (leftLen > 0 && rightLen > 0) {
      // both left and right are still populated
      if (left[0] < right[0]) {
        result.push(left.shift());
        leftLen -= 1;
      } else if (right[0] <= left[0]) {
        result.push(right.shift());
        rightLen -= 1;
      }
    }

    // Only left array has values
    if (leftLen > 0) {
      result.push(left.shift());
      leftLen -= 1;
    }

    // Only right array has values
    if (rightLen > 0) {
      result.push(right.shift());
      rightLen -= 1;
    }
  }

  return result;

}

function mergeSort(array) {

  var length = array.length;
  if (length <= 1) {
    return array;
  }

  var mid = Math.floor(length/2);
  var left = mergeSort(array.slice(0, mid));
  var right = mergeSort(array.slice(mid));
  return merge(left, right);

}
