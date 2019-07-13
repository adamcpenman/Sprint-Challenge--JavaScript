// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume (a,b, callback) {
  return callback(a,b);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

 function consume(x, y, cb) {
  add(x,y) 
  return cb(x,y);
}
function add(x, y) {
  return x + y;
}

function consume(e,f,cb) {
  multiply(e,f)
  return cb(e,f);
}
function multiply(e,f) {
  return e * f;
}

function greeting (first_name, last_name) {
  return `Hello ${first_name} ${last_name}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add);
console.log(add(2,2));
consume(10,16,multiply); // 160
console.log(multiply(10,16));
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!
console.log(greeting("Mary", "Poppins"));

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();