const number = Number(prompt("nhap so: "));
let isPrime = true;

if (number === 1) {
    console.log("1 ko phai la so nguyen to.");
}

else if (number > 1) {

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} la so nguyen to`);
    } else {
        console.log(`${number} ko pahi so nguyen to`);
    }
}