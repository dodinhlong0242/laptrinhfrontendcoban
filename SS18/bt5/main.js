let sokinhnghiem=parseInt(prompt("Nhập số kinh nghiệm: "));
if (sokinhnghiem<1) {
    document.writeln("mới vào nghề");
}else if (sokinhnghiem>=1 && sokinhnghiem<=3) {
    document.writeln("nhân viên có kinh nghiệm");
}else if (sokinhnghiem>=4 && sokinhnghiem<6) {
    document.writeln("chuyên viên");
}else if (sokinhnghiem>=6) {
    document.writeln("quản lý");
}     