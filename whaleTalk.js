/* 
----------------------------------------------------------------------
WHALE TALK
----------------------------------------------------------------------
Take a phrase like 'turpentine and turtles' and translate 
it into its "whale talk" equivalent: 'UUEEIEEAUUEE'.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding "y".
The u's and e's are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung 
slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops.
*/

let input = "A whale of a deal!"
input = input.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let v = 0; v < vowels.length; v++) {
    if (input[i] === vowels[v]){
      resultArray.push(vowels[v]);
    };
  }if (input[i] === 'e') {
      resultArray.push(input[i]);
    }if (input[i] === 'u') {
      resultArray.push(input[i]);
    }
}

console.log(resultArray.join('').toUpperCase());