let n = Number(prompt("moi ban nhap so can in: "));
if (isNaN(n) || n <= 0) {
    alert("vui long nhap 1 so nguyen duong.");
} else {
    let count = 0;
    let num = 2;
        console.log(`Danh sach ${n} so nguyen to dau tien:`);
    while (count < n) {
        let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
        break;
        }
        }
            if (isPrime) {
            console.log(num);
            count++;
        }
        num++;
    }
}