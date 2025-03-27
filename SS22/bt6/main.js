let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let input = prompt("nhap so can kiem tra: ");
let check = Number(input);
let count = 0;
for (let i in numbers) {
    if (numbers[i] === check) {
        count++;
    }
}
if (count > 0) {
    console.log(`so ${check} xuat hien ${count} lan`);
} else {
    console.log(`so ${check} ko xuat hien trong mang`);
}