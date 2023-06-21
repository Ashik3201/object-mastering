var start = new Date();
var sum = 0;
for(let i = 0; i < 10000000; i++){
    sum = sum + 1;
}
var end = new Date();

console.log('time:' , end - start , sum);
