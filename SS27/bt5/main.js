function mangcon(data, n) {
    if (!Array.isArray(data) || typeof n !== 'number' || n <= 0) {
        return "du lieu ko hop le";
    }

    let result = [];
    for (let i = 0; i < data.length; i += n) {
        result.push(data.slice(i, i + n));
    }

    return result;
}

console.log(mangcon([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(mangcon([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(mangcon("abc", 3));
