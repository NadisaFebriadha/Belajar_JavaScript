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

//menggabungkan 2 array
var x = [1, 2, 3]
var y = [4, 5, 6]
var z = x.concat(y)
console.log(z);

//cara pertama mencari nilai max dan min 
var x = [1, 10, 9, 8]
var min = Math.min(...x)

var max = Math.max(...x)
console.log("nilai max", max);
console.log("nilai min", min);

//cara kedua mencari nilai max dan min 
//const x = [ 1, 10, 9, 8];
//let min = x;
//let max = 0;

//for (let i = 0; i < x.length; i += 1) {
    //if(x[i] > max) max = x[i];
    //if(x[i] < min) min = x[i];
//}
//console.log(min, max);

var x =[1, 10, 9, 8];
var min = x[0]; 
for (var i = 0; i < x.length; i++) {
    if(x[i]<min)
    {
        min = x[i];
    }
}

var max = x[0];
for (var i = 0; i < x.length; i++) {
    if(x[i]>max)
    {
        max = x[i];
    }
}
  console.log("nilai min:", min);
  console.log("nilai max:", max);


//menghitung rata-rata
var number = [2, 3, 5, 10]
var average = 0;
var Score = 0;

for(let i = 0; i < number.length; i++) {
    Score = Score + number[i];
    average = Score/(i+1);
}
console.log("The average grade is:", + average);
console.log("The score grade is:", + Score)

//menghitung jumlah total bilangan genap

var angka =[ 1, 2, 3, 4]
var genap = []

for(var i = 0; i < angka.length; i++) {
    if(angka[i] %2 == 0) {
    genap.push(angka[i])
}
};
console.log("nilai genap", genap);
var nomor = genap;
var total_nomor = 0;
for(i = 0; i <nomor.length; i++){
    total_nomor += nomor[i];
};


//mencari item didalam array
console.log("---------")
var x = [1,2,3,4,5]

var indexOfThree = x.indexOf(3);
var indexFromArray = x.findIndex((v) => {
  return v == 3
})

console.log(indexOfThree)
console.log(indexFromArray);

x.splice(indexOfThree,1);
console.log(x)

//remove item dari index
const index = x.indexOf(2);
if (index > -1){
    x.splice(index,1);
}
console.log(x)