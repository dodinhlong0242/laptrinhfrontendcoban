let arr =[];
function nhapcacsonguyen(arr) {
    let n = Number(prompt("Nhap so luong phan tu cua mang (n):"));
    if (n <= 0) {
        alert("so phan tu ko hop le! ");
    }
    for (let i = 0; i < n; i++) {
        let input = Number(prompt(`nhap phan tu thu ${i + 1}:`));
        arr.push(input);
        input = arr;
    }
    alert(`so nguyen trong mang la: ${arr}`);
}

function trungbinhtong(arr) {
    if(arr.length === 0){
        return "mang rong";
    }
    let sum =0;
    for(let i in arr){
        sum += arr[i];
    }
    let trungbinh = sum / arr.length;
    alert(`trung binh cong cua mang la: ${trungbinh}`);

}

function sochanlonnhat(arr) {
    let max = arr[0];
    let chanlonnhat =0;
    for(let i=1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(max % 2 === 0){
            chanlonnhat = max;
        }
    }
    alert(`so chan lon nhat la: ${chanlonnhat}`);
}

function solenhonhat(arr) {
    let min = arr[0];
    let lenhonhat = 0;
    for (let i =1; i< arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
        if(min % 2 !== 0){
            lenhonhat = min;
        }
    }
    alert(`so le nho nhat la: ${lenhonhat}`);
}

function Menu() {
    while(true){
    alert("----------Menu----------\n"
        +"1.nhap danh sach cac so nguyen\n"
        +"2.tinh trung binh cac so\n"
        +"3.tim so chan lon nhat\n"
        +"4.tim so le nho nhat\n"
        +"5.thoat");

        let choice = Number(prompt("chon chuc nang tu (1-5): "));
        switch (choice) {
            case 1:
                nhapcacsonguyen(arr);
                break;
            case 2:
                trungbinhtong(arr);
                break;
            case 3:
                sochanlonnhat(arr);
                break;
            case 4:
                solenhonhat(arr);
                break;
            case 5:
                alert("thoat");
                break;
            default:
                alert("vui long chon chuc nag tu (1-5): ");
                break;
        }
    }
}
Menu();