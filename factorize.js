function factorize(num) {
    let factors = []
    for (i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i)
        }
    }
    return factors
}