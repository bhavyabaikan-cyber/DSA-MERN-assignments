let val = function(arr,key){
    let res = "not found";
    for(let i=0;i<arr.length;i++){
        if(arr[i] == key){
            res = i;
        }
    }
    return res;
}
console.log("index is",val([10,20,30],10));
console.log("index id ",val([1,2,3],4));