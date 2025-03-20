let month = Number(prompt("Nhap thang:"));
if (month === 1 || month === 2 || month === 3) {
    alert(`thang ${month} la mua xuan`);
} else if (month === 4 || month === 5 || month === 6) {
    alert(`thang ${month} la mua ha`);
} else if (month === 7 || month === 8 || month === 9) {
    alert(`thang ${month} la mua thu`)
} else if (month === 10 || month === 11 || month === 12) {
    alert(`thang ${month} la mua dong`);
} else {
    alert("thang nhap ko hop le");
}
