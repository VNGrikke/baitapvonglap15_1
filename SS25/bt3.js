let a = +prompt("a");
let sum = 0;
let i = 0;
if(a>0 && a%1===0){
    while(sum < a){
        i++;
        sum += i;
        
    }
    console.log(i-1);
}
