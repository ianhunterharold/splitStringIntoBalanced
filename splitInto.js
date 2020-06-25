/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let rAndL = {
      "R":0,
      "L":0      
  };
 
  let count = 0; 
  
  let splitStr= s.split('');
  
  for (let i=0; i <splitStr.length; i++){
      if (splitStr[i] === "R"){
          rAndL["R"] += 1;
      } else {
          rAndL["L"] += 1;
      }
      
      if (rAndL["L"]  === rAndL["R"]){
          count++;
          rAndL["R"] = 0;
          rAndL["L"] = 0;
      }
  }
  return count;
};

// solve as a human

// repeating string that has R's and L's 
// return a number of how many even splits you can bring the string into 

//r's and l's have to match each other

// have a count for the nubmer of even splits 

// while im looking through the string, keep track of how many l's and how many r's there are 
// when the switch happens between letters see if there is an even number to match up 

// length will be greater than 1 and less than 1000 
// both capitalized 

// what we are looking for are the break points between L/R and if they match evenly, if they do then count by one and then move on, 

// solve as a dev 

// have count for how many times the changes happen
  // add to the object the Letter,
  // when the letter changes
  // start counting for that new letter
  // once they match up, increase the count by one