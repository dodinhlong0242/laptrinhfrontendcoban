let n = parseInt(prompt("Nhap so n: "));

if(isNaN(n) || n <= 0) {// kiem tra so nhap vao phai so duong ko
    alert("hay nhap mot so nguyen duong .");
} else {
    let sum = 0;

    for(let i = 1; i <= n; i++) {
        sum += i;
    }

    alert(`tong cac so nguyen tu 1 de  ${n} la: ${sum}`);
}
