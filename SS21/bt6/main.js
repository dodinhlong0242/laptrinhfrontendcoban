let number = parseInt(prompt("nhap 1 so nguyen bat ki: "));

if (isNaN(number)) {
    console.log("vui long nhap mot so nguyen ko hop le.");
} else {
    console.log(`cac uoc cua so ${number} la:`);
    for (let i = 1; i <= Math.abs(number); i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}
