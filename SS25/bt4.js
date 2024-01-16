let a = +prompt("a");
let sum = 0;
if(a>0 && a%1===0){
    for(let i = 1; i <= a; i++){
        sum = sum*10 + i;
    }
}
console.log(sum)