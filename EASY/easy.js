//EASY
/*Write a function that takes in an array of numbers and outputs the average of all the numbers.*/

function calculate(average) {
    var total = 0;
    var count = 0;
    
    average.forEach(function(item) {
        total += item;
        count++;
    });

    return total / count;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(calculate(array));






