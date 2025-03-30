let arr = [];

while (true) {
    alert("Menu\n"
        + "1.nhap mang so nguyen\n"
        + "2.hien thi mang\n"
        + "3.tim phan tu chan va le trong mang\n"
        + "4.tinh trung bnh cong cua mang\n"
        + "5.xoa phan tu\n"
        + "6.tim phan tu lon thu hai trong mang\n"
        + "7.thoat chuong trinh\n");

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
            let chan = [];
            let le = [];
            for (let i in arr) {
                if (arr[i] % 2 === 0) {
                    chan.push(arr[i]);
                } else {
                    le.push(arr[i]);
                }
            }
            alert(`phan tu chan la: ${chan} \n phan tu le la: ${le}`);
            break;
        case 4:
            let sum = 0;
            for (let i in arr) {
                sum += arr[i];
            }
            let trungbinh = arr.length > 0 ? sum / arr.length : 0;
            alert(`Trung binh cong cua mang la: ${trungbinh}`);
            break;
        case 5:
            let Delete = Number(prompt("nhap vi tri can xoa: "));
            if (Delete >= 0 && Delete < arr.length) {
                arr.splice(Delete, 1);
                alert(`mang sau khi xoa la: ${arr}`);
            } else {
                alert(`vi tri ko hop le!`);
            }
            break;
        case 6:
            let sortedArray = [...new Set(arr)].sort((a, b) => b - a); 
            if (sortedArray.length >= 2) {
                alert(`Phan tu lon thu hai la: ${sortedArray[1]}`);
            } else {
                alert("Mang khong co du phan tu khac nhau de tim phan tu lon thu hai!");
            }
            break;
        case 7:
            alert("Thoat chuong trinh!");
            break;
        default:
            alert("lua chon ko hop le! vui long nhap lai");
            break;
    }
    if (choice === 7) {
        break; 
    }
    
}

