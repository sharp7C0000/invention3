const apple = "apple";
const banana = "banana";
const ornage = "orange";

const foo = false;

let myFruit = (() => {
   if(foo) {
     return apple;
   } else {
     return banana;
   }
})();

console.log("what is my fruit?", myFruit);