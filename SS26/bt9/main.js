function getarr(arr) {
    if (!Array.isArray(arr)) {
        return "Du lieu khong hop le"; 
    }
    if (arr.length === 0) {
        return "Mang khong co phan tu nao"; 
    }

    
    function sumle(arr) {
        let sumLe = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) { 
                sumLe += arr[i];
            }
        }
        return sumLe; 
    }

    
    function sumchan(arr) {
        let sumChan = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) { 
                sumChan += arr[i];
            }
        }
        return sumChan; 
    }

    let totalOdd = sumle(arr);
    let totalEven = sumchan(arr);

    alert("Tong so chan: " + totalEven); 
    alert("Tong so le: " + totalOdd); 

}
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
getarr(input);
