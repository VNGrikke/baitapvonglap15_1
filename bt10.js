var A = new Array(20)
let t = 0;
for(let i = 0; t < 20; i++){
    if(i === 2 || i === 3 || i === 5){
        A[t] = i;
        t++;
    }else if(i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i !== 1){
        A[t] = i;
        t++;
    }
}
let x = +prompt("x");
let j;
if(x > 0 && x % 1 === 0){
    console.log("x sau khi phân giải");
    for(j = 0; j < 20; j++){
        if(x%A[j]===0){
            x = x/A[j];
            console.log(A[j]);
            j = -1;
        }
    }
}