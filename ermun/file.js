
let row = 5;
let str = '';
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= row; j++) {
        if (i === 1 || i === row) {
            str += '*';
        } else if (true) {
            if (j === 1 || j === row) {
                str += '*';
            } else {
                str += ' ';
            }
        }
    }
    str += '\n';
}
console.log(str);