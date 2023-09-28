// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Developer Louis
describe("ranColors", () => {
  it("removes the first item from the array and shuffles the remaining items", () => {

    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    expect(["blue", "green", "yellow", "pink"]).toEqual(expect.not.arrayContaining(colors1))   
    
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    expect(["indigo","periwinkle", "ochre", "aquamarine", "saffron"]).toEqual(expect.not.arrayContaining(colors2))
  })
})
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Pseudo code:
// name : ranColors
// input : 1 array
// output : 1 array
// process : a function that will take an array as a parameter, use shift to remove the first element of the array, then use the Fisher-Yates shuffle to shuffle the array.

// const ranColors = (array) => { // function that takes an array as a parameter

//   array.shift() // this will remove the first element of the array using shift

// // ---- the Fisher-Yates shuffle will shuffle the array
//   for (let i = array.length - 1; i > 0; i--) { 
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// // ----
//   return array // this will return the array

// }

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// Developer Aleja
describe("tallyFunc", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
     // Expected output: -31
    expect(tallyFunc(votes1)).toEqual((11))
    expect(tallyFunc(votes2)).toEqual((-31))
  })
})
// Good failure: ReferenceError: tallyFunc is not defined
// b) Create the function that makes the test pass.
// Pseudo code:
// name: tallyFunc
// input: an object that contains up votes and downvotes
// output: the end tally of the votes and downvotes
// process: first I'm going to put the object as the parameter of the function
// then im going to create a new variable called totalVotes that will store the operation of substracting downvotes from the upvotes, and then im going to return the new variable that I created. 
// I would like to know if there is another way to make this function more reusable, if there is another key word i can use in line 77 to access the values inside the object because right now im calling the specific name "upVotes" and "downVotes" to make the function work 

// const tallyFunc = (object) => {
//     let totalVotes = object.upVotes - object.downVotes
//   return totalVotes
// }
// TEST PASSED

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// Developer Dre
// a) Create a test with an expect statement using the variables provided.

describe("combinedArray", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    expect(combinedArray(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// GOOD FAILURE ReferenceError: combinedArray is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: combinedArray 
// input: two arrays
// output: one array
// process: create a variable that will hold the combined array by using .concat and the spread operator to add the arrays. Then, create another const called unique array that will use Set to remove the duplicates in the array, and convert the set back to an array by using Array.from. Finally, return the unique array. 


// function combinedArray(...arrays) {
//   const mergedArray = [].concat(...arrays);
//   const uniqueArray = Array.from(new Set(mergedArray));
//   return uniqueArray;
// }
