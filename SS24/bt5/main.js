let array2D = [];

while (true) {
    alert(
        'MENU\n' +
        '1. Nhap mang 2 chieu\n' +
        '2. Hien thi mang 2 chieu\n' +
        '3. Tinh tong cac phan tu trong mang\n' +
        '4. Tinh tong duong cheo chinh\n' +
        '5. Tinh tong duong cheo phu\n' +
        '6. Tinh trung binh cong cac phan tu trong mot hang hoac mot cot\n' +
        '7. Thoat chuong trinh'
    );

    let choice = Number(prompt('Nhap lua chon cua ban:'));

    switch (choice) {
        case 1:
            let rows = Number(prompt('Nhap so hang:'));
            let cols = Number(prompt('Nhap so cot:'));
            array2D = [];
            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    row.push(Number(prompt(`Nhap phan tu [${i}][${j}]:`)));
                }
                array2D.push(row);
            }
            alert('Mang da duoc nhap thanh cong!');
            break;

        case 2:
            if (array2D.length === 0) {
                alert('Mang chua duoc nhap!');
            } else {
                let display = 'Mang 2 chieu:\n';
                for (let i = 0; i < array2D.length; i++) {
                    display += array2D[i].join(' ') + '\n';
                }
                alert(display);
            }
            break;

        case 3:
            if (array2D.length === 0) {
                alert('Mang chua duoc nhap!');
            } else {
                let sum = 0;
                for (let i = 0; i < array2D.length; i++) {
                    for (let j = 0; j < array2D[i].length; j++) {
                        sum += array2D[i][j];
                    }
                }
                alert('Tong cac phan tu trong mang: ' + sum);
            }
            break;

        case 4:
            if (array2D.length === 0) {
                alert('Mang chua duoc nhap!');
            } else {
                let sumDiagonal = 0;
                for (let i = 0; i < array2D.length; i++) {
                    if (i < array2D[i].length) {
                        sumDiagonal += array2D[i][i];
                    }
                }
                alert('Tong duong cheo chinh: ' + sumDiagonal);
            }
            break;

        case 5:
            if (array2D.length === 0) {
                alert('Mang chua duoc nhap!');
            } else {
                let sumDiagonal = 0;
                let size = array2D.length;
                for (let i = 0; i < size; i++) {
                    if (size - i - 1 < array2D[i].length) {
                        sumDiagonal += array2D[i][size - i - 1];
                    }
                }
                alert('Tong duong cheo phu: ' + sumDiagonal);
            }
            break;

        case 6:
            if (array2D.length === 0) {
                alert('Mang chua duoc nhap!');
            } else {
                let subChoice = prompt('Chon "hang" hoac "cot":').toLowerCase();
                if (subChoice === 'hang') {
                    let rowIndex = Number(prompt('Nhap so thu tu hang:'));
                    if (rowIndex >= 0 && rowIndex < array2D.length) {
                        let sum = 0;
                        for (let j = 0; j < array2D[rowIndex].length; j++) {
                            sum += array2D[rowIndex][j];
                        }
                        alert('Trung binh cong hang ' + rowIndex + ': ' + (sum / array2D[rowIndex].length));
                    } else {
                        alert('Hang khong hop le!');
                    }
                } else if (subChoice === 'cot') {
                    let colIndex = Number(prompt('Nhap so thu tu cot:'));
                    let sum = 0, count = 0;
                    for (let i = 0; i < array2D.length; i++) {
                        if (colIndex >= 0 && colIndex < array2D[i].length) {
                            sum += array2D[i][colIndex];
                            count++;
                        }
                    }
                    if (count > 0) {
                        alert('Trung binh cong cot ' + colIndex + ': ' + (sum / count));
                    } else {
                        alert('Cot khong hop le!');
                    }
                } else {
                    alert('Lua chon khong hop le!');
                }
            }
            break;

        case 7:
            alert('Thoat chuong trinh. Tam biet!');
            break;

        default:
            alert('Lua chon khong hop le. Vui long chon lai!');
            break;
    }
    if (choice === 7) {
        break;
    }
}
