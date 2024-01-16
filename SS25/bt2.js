let a = +prompt("a");
let b = +prompt("b");
let suml = 0;
let sumc = 0;
if (a>b){
    for(let i = b; i<=a; i++){
        if(i%2===0){
            sumc += i;
        }else{
            suml += i;
        }
    }
}else{
    for(let i = a; i<=b; i++){
        if(i%2===0){
            sumc += i;
        }else{
            suml += i;
        }
    }
}
console.log("tong so le "+suml);
console.log("tong so chan "+sumc);