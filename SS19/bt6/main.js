let a = Number(prompt("nhap a:"));
let b = Number(prompt("nhap b:"));
let c = Number(prompt("nhap c:"));
let delta = b * b - 4 * a * c;
if (a === 0) {
    if (b === 0) {
        alert(c === 0 ? "phuong trinh co vo so nghiem" : "phuong trinh vo nghiem");// toan tu 3 ngoi
    } else {
        let x =-c / b;
        alert(`phuong trinh co nghiem duy nhat: x = ${x}`);
    }
} else {
    if (delta < 0) {
        alert("phuong trinh vo nghiem");
    } else if (delta === 0) {
        let x =-b / (2 * a);
        alert(`phuong trinh co nghiem kep: x = ${x}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`phuong trinh co hai nghiem phan biet: x1 = ${x1}, x2 = ${x2}`);
    }
}