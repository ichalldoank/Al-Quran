//let's first code



//variable
//deklarasi sebuah variable

//1. automatic
//2. var
//3.let
//4.const

// //automatic variable
// x = 1;
// y = 3;

// z = x+y;

// console.log(z);

 //variable var
 
//  var a  
//  var b 

//  var a = 10
//console.log(a);

//variable let

//let a = 1;
//let b = 3;

//a = 45

//variable const

// var a = 30, b = 20, c = 50;

//arithmatic

//penjumlahan (additional) -> +
//pengurangan (substraction)-> -
//perkalian (multiplication)-> *
//pembagian (division)-> /
//modulus (sisa hasil bagi)-> %

//increment (urutan dari terkecil ke terbesar)-> ++
//decrement (urutan dari besar ke kecil)-> --
//(berlaku untuk huruf)

//comparison operator
//equal to (sama dengan)-> ==
//equal value and type (nilai dan type sama)-> ===
//not equal (tidak sama dengan)-> !=
//not equal value and type (tidak sama nilai dan type)-> !==
//greather than(lebih besar)-> <
//less than(lebih kecil)-> >
//greather than or equal(lebih besar atau sama dengan)-> >=
//less than or equal(lebih kecil atau sama dengan)-> <=
//ternary(percabangan dari if atau shorthand if)

// a = 30
// b = 20 + 40 * a
// console.log(b)

// tipe data di java script

// 1. string => tipe data yg memuat karakter contoh : '' atau "masukkan huruf ataupun angka"
//contoh:
// var a = "tipe data string";

var a = "30"  //string tdk dapat di jumlahkan
var b = a + 40 
// console.log(b)

//2. number => tipe data yg memuat angka
var a = 27.3 + 10 //pecahan jg berlaku dalam number
// console.log(a)

//3. bigint => tipe data bilangan bulat



//4. boolean => kebenaran
//true or false

let c = true
let d = false

//tipe data object

var mobil = {nama: "Arpus", merk:"Atoyot", warna:["merah", "hitam", "kuning"]}
console.log(mobil.warna)


//tipe data array
//tipe data array merupakan kumpulan data yang tidak memiliki property tapi diurutkan berdasarkan index

var motor = ["Mio M3", "Beat", "Vario", "Nmax"]
console.log(motor.length)

//bedany var, const dan let

var nama = 'saya adalah hehe';
var nama = 'saya adalah mwehehehe'; //dia bisa dideklarasi ulang dan valueny bisa diubah
console.log(nama)

let nama = 'saya adalah hehe';
let nama = "saya adalah mwehehehe"; //tdk bisa dideklarasi ulang dan value bisa diubah
console.log(nama)


const nama = 'saya adalah hehe';
const nama = "saya adalah mwehehehe"; //tetap tdk bisa diubah-ubah
console.log(nama)
