let input = prompt("nhap chuoi ki tu: ");
let isValidNumber = true;
for (let i in input) {//duyet qua tung ki tu cua mang
    if (isNaN(input[i]) || input[i] === " ") {
        isValidNumber = false;
        break;
    }
}
if (isValidNumber) {
    let numbers = input.split("");
    let maxNumber = -Infinity;//tim gia tri lon nhat trong tap hop so

    for (let j in input) {//duyet qua tung ki tu de tim so lon nhat
        if (numbers[j] > maxNumber) {
            maxNumber = numbers[j];
        }
    }
    console.log(maxNumber + " là số lớn nhất trong dãy số.");
} else {
    console.log("Dãy số không hợp lệ.");
}
