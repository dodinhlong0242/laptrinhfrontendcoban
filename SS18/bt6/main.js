let year=parseInt(prompt("nhập năm muốn kiểm tra: "));
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            document.writeln(year+" là năm nhuận");
        }else{
            document.writeln(year+" không phải là năm nhuận");
        }
 }else{
    document.writeln(year+" là năm nhuận");}}
else{
    document.writeln(year+" không phải là năm nhuận");
}
