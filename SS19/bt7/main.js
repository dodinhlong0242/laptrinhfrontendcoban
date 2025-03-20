let a = Number(prompt("nhap so a:"));
let b = Number(prompt("nhap so b:"));
let c = Number(prompt("nhap so c:"));
a > b || a > c ? alert(`so lon nhat trong 3 so la ${a}`) :
    b > a || b > c ? alert(`so lon nhat trong 3 so la ${b}`) :
        c > a || c > b ? alert(`so lon naht trong 3 so la ${c}`) : alert(`3 so deu bang nhau`)
