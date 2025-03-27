
let arr = [];
for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Nhập số thứ " + i + ":"));
    arr.push(num);
}

let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}
alert("Số lượng số nguyên lớn hơn hoặc bằng 10 là: " + count)