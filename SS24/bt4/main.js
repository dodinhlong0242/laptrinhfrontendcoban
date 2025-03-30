let array = [];

while (true) {
    alert("Menu:\n"
        + "1. Nhap mang 2 chieu\n"
        + "2. Hien thi mang 2 chieu\n"
        + "3. Tinh tong cac phan tu trong mang\n"
        + "4. Tim phan tu lon nhat trong mang va chi so cua no\n"
        + "5. Tinh trung binh cong cac phan tu cua mot hang cu the\n"
        + "6. Dao nguoc cac hang trong mang\n"
        + "7. Thoat chuong trinh");
    let choice = Number(prompt("Chon chuc nang: "));

    switch (choice) {
        case 1:
            let rows = Number(prompt("Nhap so hang: "));
            let cols = Number(prompt("Nhap so cot: "));
            array = Array.from({ length: rows }, () =>
                Array.from({ length: cols }, () => Number(prompt("Nhap gia tri: ")))
            );
            alert("Mang da duoc nhap thanh cong!");
            break;

        case 2:
            if (array.length === 0) {
                alert("Mang chua duoc nhap!");
            } else {
                let display = "Mang 2 chieu:\n";
                array.forEach(row => display += row.join(" ") + "\n");
                alert(display);
            }
            break;

        case 3:
            if (array.length === 0) {
                alert("Mang chua duoc nhap!");
            } else {
                let sum = array.flat().reduce((a, b) => a + b, 0);
                alert(`Tong cac phan tu trong mang: ${sum}`);
            }
            break;

        case 4:
            if (array.length === 0) {
                alert("Mang chua duoc nhap!");
            } else {
                let max = array[0][0];
                let position = { row: 0, col: 0 };
                array.forEach((row, i) => row.forEach((value, j) => {
                    if (value > max) {
                        max = value;
                        position = { row: i, col: j };
                    }
                }));
                alert(`Phan tu lon nhat la ${max} tai chi so (${position.row}, ${position.col})`);
            }
            break;

        case 5: 
            if (array.length === 0) {
                alert("Mang chua duoc nhap!");
            } else {
                let row = Number(prompt("Nhap chi so hang de tinh trung binh: "));
                if (row >= 0 && row < array.length) {
                    let rowSum = array[row].reduce((a, b) => a + b, 0);
                    let average = rowSum / array[row].length;
                    alert(`Trung binh cong cac phan tu cua hang ${row}: ${average}`);
                } else {
                    alert("Hang khong hop le!");
                }
            }
            break;

        case 6: 
            if (array.length === 0) {
                alert("Mang chua duoc nhap!");
            } else {
                array = array.map(row => row.reverse());
                let reversedDisplay = "Mang sau khi dao nguoc cac hang:\n";
                array.forEach(row => reversedDisplay += row.join(" ") + "\n");
                alert(reversedDisplay);
            }
            break;

        case 7: 
            alert("Thoat chuong trinh.");
            break;

        default:
            alert("Lua chon khong hop le!");
            break;
    }

    if (choice === 7) {
        break;
    }
}
