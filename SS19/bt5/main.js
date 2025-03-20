let input = prompt("nhap chuoi ly tu");
if (input.includes(" ")) {
    alert(`Chuoi "${input}" co chua dau cach`);
} else {
    alert(`Chuoi "${input}" khong chua dau cach`);
}
