let n =Number(prompt("nhap so n:"));
if (n <= 0 || isNaN(n)) {
    alert("Vui long nhap so nguyen duong.");
} else {
    let count = 0;
    let currentNumber = 2; 
    let primeNumbers = ""; 
    while (count < n) {
        let isPrime = true;
        if (currentNumber < 2) {
            isPrime = false; 
        } else {
            for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
                if (currentNumber % i === 0) {
                    isPrime = false;
                    break; 
                }
            }
        }

        if (isPrime) {
            primeNumbers += currentNumber + " ";
            count++;
        }
        currentNumber++;
    }

    alert(`cac so nguyen to dau tien la: ${primeNumbers.trim()}`);
}
