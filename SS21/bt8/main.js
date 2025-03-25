console.log("ca so armstrong co 3 chu so la:");

for (let num = 100; num < 1000; num++) {
    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }

    if (sum === num) {
        console.log(num);
    }
}
