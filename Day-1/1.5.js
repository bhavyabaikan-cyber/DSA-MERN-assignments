let b = function(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>c && b>a){
        return b;
    }
    else{
        return c;
    }
}
console.log(b(10,20,30));