let number=parseInt(prompt("Enter a number: "));
function numberToWords(num) {
    const ones = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const teens = ["", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];
    const tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
    const hundreds = ["", "trăm"];

    if (num === 0) return "không";

    let word = '';

    if (Math.floor(num / 100) > 0) {
        word += ones[Math.floor(num / 100)] + " " + hundreds[1] + " ";
        num %= 100;
    }

    if (num > 10 && num < 20) {
        word += teens[num - 10] + " ";
    } else {
        if (Math.floor(num / 10) > 0) {
            word += tens[Math.floor(num / 10)] + " ";
            num %= 10;
        }
        if (num > 0) {
            word += ones[num] + " ";
        }
    }

    return word.trim();
}

if (number >= 0 && number <= 999) {
    alert(numberToWords(number));
} else {
    alert("Vui lòng nhập một số từ 0 đến 999.");
}