let n = Number(prompt("Nhap so luong phan tu cua mang (n):"));
let arr = [];
let nhat = 0;
let nhi = 0;
if (n < 0) {
    console.log("so luong phan tu ko duoc nho hon 0");
} else if (n === 0) {
    console.log("mang ko co phan tu");
} else {
    for (let i = 0; i < n; i++) {
        let num = Number(prompt(`nhap phan tu thu ${i + 1}:`));
        arr.push(num);
        if (arr[i] > nhat) {
            nhi = nhat;
            nhat = arr[i];
        } else if (arr[i] > nhi ) {
            nhi = arr[i];
        }
    }
    if (nhat !== nhi) {
        console.log(nhi);
    }
}



