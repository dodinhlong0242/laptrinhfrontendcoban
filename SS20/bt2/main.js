let N = Number(prompt("nhap N: ")); 
for (let i = 1; i <= N; i++) {
    if (i % 5 === 0) {
        console.log(`cac so chia het cho 5 tu 1 den ${N} la: ${i}`);
    }
}