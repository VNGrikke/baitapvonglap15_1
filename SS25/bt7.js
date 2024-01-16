function ucln(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function boichungnhonhat(a, b, c, d){
    let ucln1 = ucln(a, b);
    let ucln2 = ucln(c, d);
    let bcnn1 = Math.abs(a * b) / ucln1;
    let bcnn2 = Math.abs(c * d) / ucln2;
    return Math.abs(bcnn1*bcnn2)/ucln(bcnn1, bcnn2);
}
let x = +prompt("x");
let y = +prompt("y");
let z = +prompt("z");
let v = +prompt("v");
let bcmin = boichungnhonhat(x, y, z, v);
console.log(bcmin);
