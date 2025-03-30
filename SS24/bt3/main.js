let array = [];

while (true) {
    alert("Menu:\n"
    +"1. Nhap mang so nguyen\n"
    +"2. Hien thi mang \n"
    +"3. Tim phan tu lon nhat trong mang va in ra chi so cua no\n"
    +"4. Tinh tong va trung binh cong cua cac so duong trong mang\n"
    +"5. Dao nguoc mang\n"
    +"6. Kiem tra mang co doi xung khong \n"
    +"7. Thoat chuong trinh");

    let choice = Number(prompt("Chon chuc nang: "));

    switch (choice) {
        case 1:
            let n = Number(prompt("Nhap so luong phan tu cua mang (n):"));
            if (n <= 0) {
                alert("so phan tu ko hop le! ");
            }
            for (let i = 0; i < n; i++) {
                let input = Number(prompt(`nhap phan tu thu ${i + 1}:`));
                array.push(input);
                input = array;
            }
            break;
        case 2:
            if (array.length === 0){
                alert("mang rong");
            } else {
                alert(array);
            }
            break;
        case 3:
            let max = array[0];
            let indexMax = 0;
            for (let i = 1; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                    indexMax = i;
                }
            }
           alert(`Phan tu lon nhat la ${max} tai chi so ${indexMax}`);
            break;

        case 4:
            let sum = 0;
            for (let i in array) {
                sum += array[i];
            }
            let trungbinh = array.length > 0 ? sum / array.length : 0;
            alert(`tong cac phan tu cua mang la: ${sum}`)
            alert(`Trung binh cong cua mang la: ${trungbinh}`);
            break;
        case 5:
            array.reverse();
            alert(array.join(" "));
            break;

        case 6:
            let isSymmetric = array.every((value, index) => value === array[array.length - 1 - index]);
            alert(isSymmetric ? "Mang co doi xung." : "Mang khong doi xung.");
            break;

        case 7:
            alert("Thoat chuong trinh.");
            exitProgram = true;
            break;

        default:
            alert("Lua chon khong hop le!");
            break;
    }
}
