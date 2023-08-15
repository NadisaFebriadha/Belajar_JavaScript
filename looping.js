//loping
for(let i = 0; i < 10; i++) {
  console.log(i + 1);
}

var i = 5
var loop = []
var loop2= []
for(let i = 0; i < 10; i++) {
  loop.push(i + 1)
}
console.log('i adalah', loop);

var i = 10
var loop2 = []
for(let i = 0; i < 100; i++) {
  loop2.push(i + 1)
}
console.log(loop2.toString());


//looping + aritmatika
var x = [ 1, 2, 3, 4]

for(let i = 0;i < x.length; i++) {
  if(x[i] % 2 !== 0) {
    console.log(x[i]);
  }
}

//looping print nama yang jumlahnya 3 karakter
console.log("-----------")
var nama =["ady", "icar", "ayu","yaumixxxx" ]

for(let i =0; i < names.length; i++){
  var name = names [1]
  
  if (name.length != 5 ){
    console.log(name,name.length)
  }
};

//looping array data
var angka = [1,2,3,4,5,6,7,8,9,10];
var genap = [];
var ganjil = [];
var habis_dibagi4 = [];

for (var i = 0; i < angka.length; i++) {
  if (angka[i] %2 == 0 ){
    genap.push(angka[i])
    if(angka[i] %4 == 0){
      habis_dibagi4.push(angka[i])
    };
  } else {
    ganjil.push(angka[i])
  }
}
console.log(genap);
console.log(ganjil);
console.log(habis_dibagi4);