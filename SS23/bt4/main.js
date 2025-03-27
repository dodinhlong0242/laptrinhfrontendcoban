let n = Number(prompt("Nhap so luong phan tu cua mang (n):"));
let arr = [];
let kituso = 0;
if (n === 0) {
    console.log(" ko co ki tu so");
} else {
    for (let i = 0; i < n; i++) {
        let num = Number(prompt(`nhap phan tu thu ${i + 1}:`));
        arr.push(num);
        if (!isNaN(num)) {
            kituso++;
        }
    }
    console.log(kituso);
}
