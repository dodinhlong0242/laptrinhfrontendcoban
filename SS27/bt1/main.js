function sum(a, b) {
    return a + b;
}
function tru(a, b) {
    return a - b;
}
function nhan(a, b) {
    return a * b;
}
function chia(a, b) {
    return a / b;
}
function Menu() {

    while (true) {
        alert("Menu\n"
            + "1.cong hai so\n"
            + "2.tru hai so\n"
            + "3.nhan hai so\n"
            + "4.chia hai so\n"
            + "5.thoat chuong trinh");

        let choice = Number(prompt("cho chuc nang (1 - 5): "));
        switch (choice) {
            case 1: {
                let a = Number(prompt("nhap so a: "));
                let b = Number(prompt("nhap so b: "));
                alert(`${a} + ${b}= ${sum(a, b)}`);
                break;
            }
            case 2: {
                let a = Number(prompt("nhap so a: "));
                let b = Number(prompt("nhap so b: "));
                alert(`${a} - ${b}= ${tru(a, b)}`);
                break;
            }
            case 3: {
                let a = Number(prompt("nhap so a: "));
                let b = Number(prompt("nhap so b: "));
                alert(`${a} * ${b}= ${nhan(a, b)}`);
                break;
            }
            case 4: {
                let a = Number(prompt("nhap so a: "));
                let b = Number(prompt("nhap so b: "));
                alert(`${a} / ${b}= ${chia(a, b)}`);
                break;
            }
            case 5:{
                alert("thoat");
                break;
            }
            default:{
                alert("vui long chon chc nang (1-5)");
                break;
            }
        }
    } 
}
Menu();