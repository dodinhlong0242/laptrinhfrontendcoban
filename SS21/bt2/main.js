let chan = 0;
let le = 0;
for (let i = 1; i <= 5; i++) {
    let num = Number(prompt(`nhap vao so nguyen thu ${i}:`));
    if (num % 2 !== 0) {
        le++;
    } else {
        chan++;
    }
}
alert(`so le da nhap la: ${le}`);
alert(`so chan da nhap la: ${chan}`);