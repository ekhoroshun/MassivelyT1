/* start server */
/* command to run - node app*/

const http = require('http');

const hostname = '127.0.0.1';

const port = 8080;

const server = http.createServer((req, res) => {
 
  res.statusCode = 200;
  
  res.setHeader('Content-Type', 'text/plain');
  res.write('Server is running')
  res.end()

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/* Question 1*/

/*Q1: Write a function to translate a text to Pig Latin and then back.
English words are translated to Pig Latin by taking the first letter of every word, 
moving it to the end of the word and adding ‘ay’. 
“The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.*/

function pigLatin(sentence){
  
  var result = sentence.replace(/\b(\w)(\w+)\b/g, '$2$1ay').toLowerCase();
  
  console.log(result)
  
  return result

}

pigLatin("The quick brown fox");

/* Question 2 */

/*Q5: Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. 
For example the list ["Hello", "World", "from", "Massively"] gets printed as:
*************
* Hello     *
* World     *
* from      *
* Massively *
************* */

function printFrame(arr) {
  
  function fill (str, length, char) {
    return (str.length < length) ? fill(str + char, length, char) : str;
  }

  let size = arr.map((str) => {
          return str.length;
      })
      .reduce((a, b) => {
          return Math.max(a, b);
      });
  
  let line = fill('', size + 4, '*');
  
  arr = arr.map((element) => {
          return '* '+ fill(element, size, ' ') + ' *';
      })
  arr.unshift(line);
  arr.push(line);
  
  return arr.join('\n');;
}

console.log(printFrame(["Hello", "World", "from", "Massively"]));

/* Question 3 */

/* Q4: Write a function that computes the list of the first 100 Fibonacci numbers. 
The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. 
The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8. */


function fibonacci(number) {

  var first = 0, 
      second = 1, 
      next = 1;

  for(var i = 2; i <= number; i++) {
      next = first + second;
      first = second;
      second = next;
  }
  console.log(next)
  return next;
};

fibonacci(100)

/* Question 4 */

/* Write a function that rotates a list by k elements. 
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. 
Try solving this without creating a copy of the list. 
How many swap or move operations do you need?*/

function arrayRotate(arr, count) {
  count -= arr.length * Math.floor(count / arr.length)
  arr.push.apply(arr, arr.splice(0, count))
  console.log(arr)
  return arr
}

arrayRotate(['1','2', '3', '4', '5', '6'], 2)

/* Question 5 */

/* 
Q3: Write a function on_all that applies a function to every element of a list. 
Use it to print the first twenty perfect squares. 
The perfect squares can be found by multiplying each natural number with itself. 
The first few perfect squares are 1*1= 1, 2*2=4, 3*3=9, 4*4=16. 
Twelve for example is not a perfect square because there is no natural number m so that m*m=12.
*/

function on_all(){
  var res;
  var i;
  for ( i = 1; i<= 20; i++){
    res = i * i;
    console.log(res)
   }
  console.log(res)
  return res
}

on_all()


