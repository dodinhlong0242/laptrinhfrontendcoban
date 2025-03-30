let arr = [];

while (true) {
    alert("Menu\n"
        + "1.nhap mang\n"
        + "2.hien thi mang\n"
        + "3.tim phan tu lon nhat va nho nhat trong mang\n"
        + "4.tinh tong cac phan tu trong mang\n"
        + "5.tim so lan xuat hien cua mot phan tu trong mang\n"
        + "6.sap xep mang tang dan\n"
        + "7.thoat chuong trinh");

    let choice = Number(prompt("chon chuc nang (1-7): "));

    switch (choice) {
        case 1:
            let n = Number(prompt("Nhap so luong phan tu cua mang (n):"));
            if (n <= 0) {
                alert("so phan tu ko hop le! ");
            }
            for (let i = 0; i < n; i++) {
                let input = Number(prompt(`nhap phan tu thu ${i + 1}:`));
                arr.push(input);
                input = arr;
            }
            break;
        case 2:
            if (arr.length === 0) {
                alert("mang rong");
            } else {
                alert(arr);
            }
            break;
        case 3:
            let max = Math.max(...arr);
            let min = Math.min(...arr);
            alert(`phan tu lon nhat la: ${max} \n phan tu nho nhat la: ${min}`);
            break;
        case 4:
            let sum = 0;
            for (let i in arr) {
                sum += arr[i];
            }
            alert(`tong cac phan tu trong mang la: ${sum}`);
            break;
        case 5:
            let check = Number(prompt("nhap so can check: "));
            let count = 0;
            for (let i in arr) {
                if (arr[i] === check) {
                    count++;
                }
            }
            alert(`phan tu ${check} xuat hien ${count} lan trong mang`);
        case 6:
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] > arr[j]) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            alert(`mang sau khi sap xep tang dan la: ${arr}`);
            break;
        case 7:
            break;
        default:
            alert("lua chon ko hop le! vui long nhap lai");
            break;
    }
}
