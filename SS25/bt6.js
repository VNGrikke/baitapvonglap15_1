let a = +prompt("a");
let f0 = 0;
let f1 = 1;
let f2 = f1 + f0;
if(a>0 && a%1===0){
    for(let i =0; i < a-2; i++){
        f0 = f1;
        f1 = f2;
        f2 = f1 + f0;
    }
}
console.log(f2);