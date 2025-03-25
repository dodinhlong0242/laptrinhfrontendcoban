let money = Number(prompt("nhap so tien ban muon gui:"));
let interestRate = Number(prompt("nhap vao lai suat(%):")) / 100;
let months = Number(prompt("nhap vao so thang gui:"));

let sum = money;

for (let i = 1; i <= months; i++) {
    let interest = sum * interestRate;
    sum += interest;
}

let totalInterest = sum - money;

console.log("tien lai:", totalInterest.toFixed(3));
console.log("tong tien nhan duoc la:", sum.toFixed(3));

