
var nilai = 80;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 85) {
  console.log("B");
} else if (nilai >= 80) {
  console.log("C");
} else if (nilai >= 70) {
  console.log("D");
}else {
  console.log("E");
}


//buat variable nilai: number
// 2. print grade
// 90 >= A
// 85 - 90 B
// 80 - 85 C
// 70 - 80 D
// < 70 E

var Harga = 1000;

if (Harga == 2000 || Harga == 3000) {
  console.log ("beli 3 ikat");
}else {
  console.log ("beli 2 ikat");
} console.log(Harga);

//control-flow
var nilai_ujian = 59;
var nilai_kehadiran = 75;

if(nilai_kehadiran < 75){
  console.log("Grade: E (Tidak Lulus karena Kehadiran Rendah)")
}else if (nilai_kehadiran >= 75){
  if(nilai_ujian >= 90){
    console.log("Grade A")
  }else if(nilai_ujian >= 80){
    console.log("Grade B")
  }else if(nilai_ujian >= 70){
    console.log("Grade C")
  }else if(nilai_ujian >= 60){
    console.log("Grade D")
  }else{
    console.log("Grade E")
  }
};

//Kalkulator Ongkos Pengiriman
console.log("-----------")

var berat_barang = 8;
var kota_tujuan = "B";
var biaya = 0;
var ongkir = 0;

if(berat_barang <= 1){
  biaya = 5000
} else if (berat_barang > 1 && berat_barang <= 5){
  biaya = 1000
} else if (berat_barang > 5 && berat_barang <= 10){
  biaya = 2000
} else {
  biaya = 3000
};

if(kota_tujuan == "a"){
  ongkir = 5000;
} else if (kota_tujuan == "b"){
  ongkir = 1000;
} else if (kota_tujuan == "b"){
  ongkir = 2000;
};
console.log("harganya:",biaya + ongkir);