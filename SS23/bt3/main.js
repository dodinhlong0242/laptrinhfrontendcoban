let n = Number(prompt("Nhap so luong phan tu cua mang (n):"));
let arr = [];
let am = 0;
if (n < 0) {
    console.log("so luong phan tu ko hop le");
} else if (n === 0) {
    console.log("mang ko co phan tu");
} else {
    for (let i = 0; i < n; i++) {
        let num = Number(prompt(`nhap phan tu thu ${i + 1}:`));
        arr.push(num);
        if (num < 0) {
            am++;
        }
    }
    console.log(am);
}
