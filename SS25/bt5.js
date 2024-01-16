let a = +prompt("a");
if(a>0){
    for(let i = 1; i <= a; i++){
        if(i%2===0) console.log(i);
    }
}else if(a<0){
    for(let i = a; i < 0; i++){
        if(i%2===0) console.log(i);
    }
}