let a = 20;
let b = 30;

const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali   = (a, b) => a * b;
const bagi   = (a, b) => a / b;
const persen = (a, b) => a % b;

console.log(`angka 1 : ${a}`);
console.log(`angka 2 : ${b}`);

console.log(`hasil pertambahan : ${tambah(a,b)}`);
console.log(`hasil pengurangan : ${kurang(a,b)}`);
console.log(`hasil perkalian   : ${kali(a,b)}`);
console.log(`hasil pembagian   : ${bagi(a,b)}`);
console.log(`hasil persen      : ${persen(a,b)}`);
