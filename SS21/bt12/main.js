console.log("Pattern a:");
for (let i = 8; i >= 1; i--) {
    console.log("*".repeat(i));
}

console.log("Pattern b:");
for (let i = 1; i <= 8; i++) {
    console.log("*".repeat(i));
}

console.log("Pattern c:");
for (let i = 1; i <= 8; i++) {
    console.log(" ".repeat(8 - i) + "*".repeat(i));
}

console.log("Pattern d:");
for (let i = 8; i >= 1; i--) {
    console.log("*".repeat(i));
}

