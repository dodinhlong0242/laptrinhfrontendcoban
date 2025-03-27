let input = [1,4,7,8,3]
let le = 0;
let chan = 0;
for (let i in input) {
    if (input[i] % 2 === 0) {
        chan += input[i];
    } else {
        le += input[i];
    }
}
console.log("tong cac so le la:" + le);
console.log("tong cac so chan la:" + chan);
