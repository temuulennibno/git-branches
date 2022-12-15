//new anhnii tooo
      let n = prompt("anhnii too shalgah");
      let i = 2;
      let isPrime = true;
      while (i <= n / 2) {
        if (isPrime) {
          isPrime = n % i !== 0;
          i++;
        }
        else {
          i = n;
        }
      }
      console.log(isPrime);