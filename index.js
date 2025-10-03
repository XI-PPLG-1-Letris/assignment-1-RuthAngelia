a = 20;
b = 30;

function tambah (a,b){
    return a + b;
}

function kurang (a,b){
    return a - b;
}

function kali (a,b){
    return a * b;
}

function bagi (a,b){
    return a / b;
}

function persen (a,b){
    return a % b;
}

console.log(`angka 1 : ${a}`);
console.log(`angka 2 : ${b}`);


console.log(`hasil pertambahan : ${tambah(a,b)}`);
console.log(`hasil pengurangan : ${kurang(a,b)}`);
console.log(`hasil perkalian   : ${kali(a,b)}`);
console.log(`hasil pembagian   : ${bagi(a,b)}`);
console.log(`hasil persen      : ${persen(a,b)}`);
