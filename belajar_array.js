//array
var peserta_magang=["nana", "ainun", "nurul", "desi", "mesyai", "arif"];

console.log("jumlah item:",peserta_magang.length)
console.log("item kedua:", peserta_magang[5]);

//
const daftar_nilai = [90, 90, 80, 40];

let total = 0;

for (let i = 0; i < daftar_nilai.length; i++) {
    console.log(daftar_nilai, +(i))
}

for (let i = 0; i < daftar_nilai.length; i++) {
    total = total + daftar_nilai[i]
};
console.log('total nilai adalah:', total);