let gio = parseInt(prompt("Nhập vào số giờ (0-23): "));
let phut = parseInt(prompt("Nhập vào số phút (0-59): "));
let giay = parseInt(prompt("Nhập vào số giây (0-59): "));

let period = "AM";

if (gio >= 12) {
    period = "PM";
    if (gio > 12) {
        gio -= 12;
    }
} else if (gio === 0) {
    gio = 12;
}

alert("Thời gian là: " + gio + ":" + (phut < 10 ? "0" + phut : phut) + ":" + (giay < 10 ? "0" + giay : giay) + " " + period);