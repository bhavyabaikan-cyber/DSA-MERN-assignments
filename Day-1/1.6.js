let sum = function(arr){
    let sum = 0;
    for(let i=1;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log("sum is ",sum([10,20,30]));