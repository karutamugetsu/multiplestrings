Basic function to get multiple strings from an array:

function shuffledWords(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
          
    return shuffled.slice(0, num);
}


How to use it:

let array = ["apple", "mango", "banana", "forward"]
let random = shuffledWords(array, 2)
console.log(random) //returns 2 elements from the array
