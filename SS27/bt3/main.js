function dientichtron(r) {
    return Math.PI * (r * r);
}
function chuvitron(r) {
    return (2 * Math.PI) * r;
}
function dientichhcn(a, b) {
    return a * b;
}
function chuvihcn(a, b) {
    return (a + b) * 2;
}
function Menu() {
    while (true) {
        alert("Menu\n"
            + "1.dien tich hinh tron\n"
            + "2.chu vi hinh tron\n"
            + "3.dien tich hcn\n"
            + "4.chu vi hcn\n"
            + "5.thoat chuong trinh");
        let choice = Number(prompt("cho chuc nang (1 - 5): "));
        switch (choice) {
            case 1: {
                let r = Number(prompt("nhap ban kinh r: "));
                alert(`${Math.PI} * ${r}=${dientichtron(r)}`);
                break;
            }
            case 2: {
                let r = Number(prompt("nhap ban kinh r: "));
                alert(`2*${Math.PI}*${r}=${chuvitron(r)}`);
                break;
            }
            case 3: {
                let a = Number(prompt("nhap so a: "));
                let b = Number(prompt("nhap so b:"));
                alert(`${a}*${b}=${dientichhcn(a, b)}`);
                break;
            }
            case 4: {
                let a = Number(prompt("nhap so a: "));
                let b = Number(prompt("nhap so b:"));
                alert(`(${a}+${b})*2=${chuvihcn(a, b)}`);
                break;
            }
            case 5: {
                alert("thoat");
                break;
            }
            default:
                alert("vui long chon chuc nang tu (1-5)");
                break;
        }
    }
}
Menu();