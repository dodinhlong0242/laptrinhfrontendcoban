let Sum = 0;
for (let i = 1; i <= 5; i++) {
    let num = Number(prompt(`nhap vao so nguyen thu ${i}:`));
    if (num % 2 !== 0) {
        Sum += num; 
    }
}

alert(`tong cac so le da nhap la: ${Sum}`);
