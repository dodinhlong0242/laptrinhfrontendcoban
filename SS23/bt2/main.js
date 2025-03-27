let arr = []; 


for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Nhập số thứ " + i + ":")); 
    arr.push(num); 
}

let max = arr[0]; // Khởi tạo biến max với giá trị là phần tử đầu tiên của mảng


for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) { // Kiểm tra nếu phần tử hiện tại lớn hơn giá trị của max
        max = arr[i]; 
    }
}

let index = arr.indexOf(max);
alert("Phần tử lớn nhất là: " + max + ", tại vị trí: " + index); 