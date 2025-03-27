let arr = ["",false,0,5, 10,"Hello world!"];
let falsy= [];

for (let i in arr){
    if (arr[i]) {
        falsy.push(arr[i]);//them gia tri dung vao mang da loc
    }
}
console.log(falsy)