const sum = (a, b) => {
    for (let i = a + 1; i <= b; i++) {
        a += i
    }
    return a
}
console.log(sum(1, 5));