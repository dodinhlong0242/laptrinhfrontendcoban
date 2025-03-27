let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
for (let i  in numbers){//duyet qua tung ki tu cua mang
    for (let j = 0; j < numbers.length - 1 - i;j++){//so sanh Bubble Sort
        if(numbers[j] > numbers[j + 1]){
            //hoan doi hai phan tu
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log(`mang sau khi sap xep tang dan la: ${numbers}`);
