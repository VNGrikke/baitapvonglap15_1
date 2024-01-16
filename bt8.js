function timUocChungLonNhat(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function timSoHinhVuongToiThieu(a, b) {
    let ucln = timUocChungLonNhat(a, b);
    return (a * b)/ucln;
}
let a = +prompt("chiều dài");
let b = +prompt("chiều rộng");

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log("nhập sai:]]");
} else {
    let soHinhVuong = timSoHinhVuongToiThieu(a, b);
    console.log("Số hình vuông tối thiểu: " + soHinhVuong);
}
