let input = prompt("nhap vao 1 day bat ki:");
let isValid = true; 

for (let i in input) {//duyet qua tung ki tu trong mang
    if (input[i] < '0' || input[i] > '9') { 
        isValid = false;
        break;
    }
}
if (isValid) {
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {//dao nguoc chuoi ki tu
        reversed += input[i];
    }
    console.log("day so sau khi dao nguoc la:", reversed);
} else {
    console.log("day ko hop le!");
}
