let dodai1=parseInt(prompt("Nhập vào độ dài cạnh thứ nhất: "));
let dodai2=parseInt(prompt("Nhập vào độ dài cạnh thứ hai: "));
let dodai3=parseInt(prompt("Nhập vào độ dài cạnh thứ ba: "));
if(dodai1+dodai2>dodai3 && dodai1+dodai3>dodai2 && dodai2+dodai3>dodai1){
    if(dodai1==dodai2 && dodai1==dodai3){
        alert("Đây là tam giác đều");
    }else if(dodai1==dodai2 || dodai1==dodai3 || dodai2==dodai3){
        alert("Đây là tam giác cân");
    }else{
        alert("Đây là tam giác thường");
    }}else{
    alert("Đây không phải tam giác");
}