let n = Number(prompt("nhap so luong phan tu cua mang(n):"));
let arr = [];
let sum = 0;
if (n < 0) {
    console.log("so luong phan tu ko duoc am.");
} else if (n === 0) {
    console.log("mang ko co phan tu.");
} else {
    for (let i = 0; i < n; i++) {
        let value = prompt(`nhap phan tu thu ${i + 1}:`);
        if (!isNaN(value)) {
            let num = Number(value);
            arr.push(num);
            sum += num; 
    }
}
    console.log(`tong cac ki tu so la: ${sum}`);
}
