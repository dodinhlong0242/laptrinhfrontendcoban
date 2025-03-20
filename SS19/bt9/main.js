// let result = "javascript" + 5; 
// // Kết quả: "javascript5"
// // Giải thích: Toán tử + ghép nối một chuỗi ("javascript") với một số (5).
// // Số được chuyển đổi thành chuỗi, và kết quả là một chuỗi.

// let result = "javascript" - 1;
// // Kết quả: NaN
// // Giải thích: Toán tử - không thể hoạt động với chuỗi không phải dạng số.
// // Vì "javascript" không thể chuyển đổi thành số, kết quả là NaN (Không phải Số).

// let result = "3" + 2;
// // Kết quả: "32"
// // Giải thích: Toán tử + coi "3" là một chuỗi và ghép nối nó với 2 (được chuyển thành chuỗi).
// // Kết quả là một chuỗi "32".

// let result = "5" - 4;
// // Kết quả: 1
// // Giải thích: Toán tử - buộc JavaScript chuyển đổi chuỗi "5" thành số.
// // Sau khi chuyển đổi, phép tính 5 - 4 được thực hiện, kết quả là 1.

// let result = isNaN("123");
// // Kết quả: false
// // Giải thích: Hàm isNaN() kiểm tra xem giá trị có phải "Không phải Số" không.
// // Vì "123" có thể chuyển đổi thành một số hợp lệ, kết quả là false.

// let result = isNaN("hello");
// // Kết quả: true
// // Giải thích: Chuỗi "hello" không thể chuyển đổi thành số.
// // Vì vậy, isNaN() trả về true, nghĩa là "Không phải Số".

// let result = Number.isNaN("123");
// // Kết quả: false
// // Giải thích: Number.isNaN() chặt chẽ hơn isNaN(), chỉ kiểm tra giá trị có chính xác là NaN hay không.
// // Vì "123" là một chuỗi và không phải NaN, kết quả là false.

// let result = Number.isNaN(NaN);
// // Kết quả: true
// // Giải thích: Number.isNaN() chỉ trả về true nếu giá trị là chính xác NaN.
// // Vì giá trị là NaN, kết quả là true.
