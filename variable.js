// what is variable?
// answer:   

// we have 3 types of variable : 1) var, 2) let, 3) const

/* var : is scoped to the nearest function or the global scope if declared outside a function. This can lead to unexpected behavior, especially in loops or conditional blocks, where the variable is accessible outside of the block it was declared in.*/
// Example:

var a = 10;
 // now we can again declar and initialize the same variable but not get error

 var a = 10;

 /* let : let and const are block-scoped, meaning they are only accessible within the specific {} block (e.g., inside an if statement or a for loop) where they are defined. This provides more predictable behavior and helps prevent bugs caused by accidental variable access.*/  
 // Example:

 let b = 10;
// now if i redeclare the variable i get error
// let b = 10
// but now i can assign this variable
// Example: 
 let c = 15;
 c = 20;

 /* const :  does not allow reassignment or redeclaration after its initial assignment. However, for objects and arrays declared with const, you can still modify their properties or contents, because only the reference to the object/array is constant, not the value itself.*/
 // Example:

 const d = 25;
 // if try to reassign or redeclare like:  d = 30 or const d = 40 ; i get error 
 



 /* Best Practices
In modern JavaScript, it is generally recommended to use const by default for values that should not change, and use let for variables that you expect to reassign (like loop counters). You should avoid using var unless you are working with legacy code*/
