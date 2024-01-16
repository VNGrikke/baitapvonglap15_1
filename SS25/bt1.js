let a = +prompt("a");
let sum = 0;
for(let i = 1; i <= a; i++){
    sum += i;
}
if(sum%2!==0){
    console.log(sum);
}else {
    console.log(sum + 1);
}