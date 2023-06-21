// const arr = [5,6,9,2,3];
// const square= [];
// for(i =0 ; i< arr.length; i++){
//     const element = arr[i];
//     const result = element * element;
//     square.push(result);
// }
// console.log(square);

const numbers = [4,5,2,5,6];

// const result = numbers.map(function(element){
//     return element *  element
// })
function sum(numbers){
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        total = total + element;

    }
    return total;
}

const  result = sum(numbers);
console.log(result);