const n = prompt("Дурын тоо оруулан уу?");
let TF = true;
for (let i = 2; i < n; i++) {
  if (TF) {
    if (n % i == 0) {
      TF = false;
    }
  }
}
console.log(TF);
