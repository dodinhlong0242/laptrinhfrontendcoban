let money = Number(prompt("nhap so tien muon doi:")); 
let currency = prompt("nhap don vi tien te can doi"); 
let exchange = 23000;
if (currency ==="VND") {
    let converted = money / exchange;
    alert(`${money} VND = ${converted.toFixed(2)} USD`);
} else if (currency ==="USD") {
    let converted =money * exchange;
    alert(`${money} USD = ${converted.toFixed(0)} VND`);
} else {
    alert("don vi tien te ko phu hop (phai la 'VND' hoac 'USD').");
}
