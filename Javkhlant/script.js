const isPrime = (num) => {
    let isPrime = true;
    for (let i = 0; i <= num / 2; i++) {
        if (num % i === 0) isPrime = false;
    }

    return isPrime;
};

console.log(isPrime(333));
