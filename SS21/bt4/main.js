a = Number(prompt('Nhap a '));
b = Number(prompt('Nhap b '));
c = Number(prompt('Nhap c '));

if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            alert('Phuong trinh vo so nghiem');
        } else {
            alert('Phuong trinh vo nghiem');
        }
    } else {
        x = -c / b;
        alert('Nghiem phuong trinh x = ' + x);
    }
} else {
    detal = b * b - 4 * a * c;
    if (detal < 0) {
        alert('Phuong trinh vo nghiem');
    } else if (detal == 0) {
        x = -b / (2 * a);
        alert('Nghiem phuong trinh x1 = x2 = ' + x);
    } else {
        x1 = (-b + Math.sqrt(dt)) / (2 * a);
        x2 = (-b - Math.sqrt(dt)) / (2 * a);
        alert(`Nghiem x1 = ${x1}, x2 = ${x2}`);
    }
}