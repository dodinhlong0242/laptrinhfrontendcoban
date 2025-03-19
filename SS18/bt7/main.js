let number1=parseInt(prompt("Nhập số thứ nhất: "));
let number2=parseInt(prompt("Nhập số thứ hai: "));
let operator=prompt("Nhập phép toán (+, -, *, /): ");
switch (operator) {
    case "+":
        document.writeln(number1+" + "+number2+" = "+(number1+number2));
        break;
    case "-":
        document.writeln(number1+" - "+number2+" = "+(number1-number2));
        break;
    case "*":
        document.writeln(number1+" * "+number2+" = "+(number1*number2));
        break;
    case "/":
        if(number2==0){
            document.writeln("Không thể chia một số cho 0");
        }else{
            document.writeln(number1+" / "+number2+" = "+(number1/number2));
        }
        break;
    default:
        document.writeln("Phép toán không hợp lệ. Vui lòng nhập '+', '-', '*', '/'");
}
