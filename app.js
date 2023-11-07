console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//function functionName (parameter(s)){}
function printOdds(count){ 
    if (count < 0){
        console.log("Please enter a positive number");
        return;
    } 
    for (let i = 1; i <= count; i++)
    if (i % 2 !==0){
        console.log(i);
    }
    }


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


  function ageChecker(userName, age){
  if (!userName || !age){
    console.log("Please enter your name and age.");
    return;
  }

  const aboveSixteen = `Congrats ${userName}. You are old enough to drive!`
  const underSixteen = `I'm sorry ${userName}. You are not old enough to drive.`
  if (age > 16){
    console.log(aboveSixteen);
  }
  else {
    console.log(underSixteen);
  }
}

  //Exercise 3

  function checkCoordinates(x, y) {
    if (x === 0 && y === 0) {
      console.log("The point is at the origin.");
    } else if (x === 0) {
      console.log(`(${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
      console.log(`(${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else if (x > 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
  }
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
