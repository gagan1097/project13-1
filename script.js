let a = [16, 5, 17];
let b = [4, 6, 9];
let sum1 = 0;
function sumofarrays() {
    for (let i = 0; i < a.length; i++) {
        sum1 += a[i] + b[i];
    }
    console.log(sum1);
}
sumofarrays();