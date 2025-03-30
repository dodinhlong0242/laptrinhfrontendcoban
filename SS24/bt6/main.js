let str = "";

while (true) {
    alert("Menu:\n"
        + "1. Nhap chuoi\n"
        + "2. Hien thi chuoi\n"
        + "3. Tinh do dai cua chuoi\n"
        + "4. Dem so lan xuat hien cua mot ky tu trong chuoi\n"
        + "5. Kiem tra chuoi co phai la chuoi doi xung khong\n"
        + "6. Chuyen doi chuoi thanh chu in hoa cac ky tu dau tien cua tu\n"
        + "7. Thoat chuong trinh");

    let choice = Number(prompt("Chon chuc nang: "));

    switch (choice) {
        case 1:
            str = prompt("Nhap chuoi: ");
            alert("Chuoi da duoc nhap!");
            break;

        case 2:
            if (str === "") {
                alert("Chuoi chua duoc nhap!");
            } else {
                alert(`Chuoi hien tai: ${str}`);
            }
            break;

        case 3:
            if (str === "") {
                alert("Chuoi chua duoc nhap!");
            } else {
                alert(`Do dai cua chuoi: ${str.length}`);
            }
            break;

        case 4:
            if (str === "") {
                alert("Chuoi chua duoc nhap!");
            } else {
                let char = prompt("Nhap ky tu can dem: ");
                let count = str.split("").filter(c => c === char).length;
                alert(`So lan ky tu '${char}' xuat hien trong chuoi: ${count}`);
            }
            break;

        case 5:
            if (str === "") {
                alert("Chuoi chua duoc nhap!");
            } else {
                let reversed = str.split("").reverse().join("");
                if (str === reversed) {
                    alert("Chuoi la chuoi doi xung.");
                } else {
                    alert("Chuoi khong phai la chuoi doi xung.");
                }
            }
            break;

        case 6:
            if (str === "") {
                alert("Chuoi chua duoc nhap!");
            } else {
                let converted = str.split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                alert(`Chuoi sau khi chuyen doi: ${converted}`);
            }
            break;

        case 7:
            alert("Thoat chuong trinh. Tam biet!");
            break;

        default:
            alert("Lua chon khong hop le!");
            break;
    }

    if (choice === 7) {
        break;
    }
}
