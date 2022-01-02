function findShortestStringRecursive(arr) {
  // type your code here
  let shortest = arr[0]
  if(arr.length===1){
    return shortest
  }else{
    if(arr[1].length < shortest.length){
      shortest = arr[1]
    }
    temp = arr.slice(2)
    temp.unshift(shortest)
    return findShortestStringRecursive(temp)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

  console.log("");

  console.log("Expecting: ''");
  console.log("=>", findShortestStringRecursive(['flower', '', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
