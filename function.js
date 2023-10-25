// function saya(params) {
//     var me = "kall"
//     return me;
// }
// saya()

// console.log("siapakah nama saya? "+saya())

// function saya(a){
//     var nama = a;
//     return nama;
// }
// saya();
// console.log(saya('kall'));

// function luaspersegi(a) {
//     var luas = 4 * 10;
//     return luas;
// }
// console.log("luas persegi adalah = "+luaspersegi());

// function keliling(p,l) {
//     var kel = (p+l)*2;
//     return kel;
// }
// console.log("keliling pesegi panjang adalah = "+keliling(10,15))

// function persegi(s) {
//     var luas = s*s
//     return luas;
// }
// var hasil = persegi(5)
// var hasil1 = persegi(10)
// console.log("jadi luas persegi yang 5cm ditambah 10cm adalah = "+persegi())


// function nama() {
//     alert("nama saya lers");
// }

// document.getElementById("btn-saya").addEventListener("click",nama)

// var namaFunction = ()=>{ //arrow function
//     console.log('hello bre');
// }


// Boolean(10 < 20)/

// var nama = "haikal",
//     umur = 15,
//     lulus = true;


// function ada 2

// 1. Function built-in = fungsi bawaan dari java script
//contoh = alert(), date(), confirm(), prompt() dll -> bisa search di W3.school atau di dev.mozilla

// 2. user define function = fungsi yg kita buat sendiri

// bentuk secara umum function / contoh function

// function nama() {
//     var x = 'nama saya adalah puppet';
//     var y = 'nama saya adalah boy';
//     var z = 'nama saya adalah paboy';

//     var semua = [x,y,z]
//     return semua;
// }

// nama()

// // var tampil = nama()
// // console.log(tampil)


// function mobil(warna,jenis) {
//     var a = warna;
//     var b = jenis
//     return a;
// }
// var output = mobil('Merah', 'sport');
// console.log(output)


// function motor(jenis,cc) {
//     var a = prompt('masukkan jenis kendaraan');
//     var b = prompt('masukkan cc kendaraan');
//     return ['jenis :'+a, 'cc: '+b];
// }
// alert(motor());


// function penjumlahan(bil1,bil2) {
//     return bil1+bil2
// }
// var a = 10;
// var b = 60;
// hasil = penjumlahan(10+b,20*a)
// console.log(hasil)


// function perkalian(angka1,angka2) {
//     return angka1*angka2
// }
// var a =  prompt('masukkan angka ke 1 :');
// var b =  prompt('masukkan angak ke 2');
// var result = perkalian(a,b);
// alert(result);

//percabangan(if, else, else-if, switch, case, etc, break)

//contoh percabangan
//valian ingin mengikuti suatu seminar yang mana seminar tsb memiliki peraturan:
// 1.jika umurnya kurang dari 13th, maka harus masuk ke ruangan A
// 2.jika umurnya lebih dari 13th dan kurang dari 17th, maka harus masuk ke ruangan B
// 3.jika umurnya lebih dari 17th, maka harus masuk ke ruangan C

// var valian = 17;

// if(valian < 13 ){
//     console.log('valian harus masuk ke ruangan A');
// }
// else if(valian > 13 && valian < 17){
//     console.log("valian harus masuk ke ruangan B")
// }
// else{
//     console.log("valian harus masuk ke ruangan C")
// }


//disebuah kursus ada sebuah jadwal materi, senin: pemograman web, selasa: android, rabu: phyton, kamis - minggu = libur.

// var hari = prompt('masukkan nama hari');

// //kondisi

// if(hari == 'senin'){
//     alert('materi hari ini adalah : pemograman web');
// }
// else if(hari == 'selasa'){
//     alert('materi hari ini adalah : android');
// }
// else if(hari == 'rabu'){
//     alert('materi hari ini adalah : phyton');
// }
// else if(hari == 'kamis'||hari == 'jumat'||hari == 'sabtu'||hari == 'ahad'){
//     alert('LAGI LIBUR BOZZ');
// }
// else{
//     alert('masukkan input yang benar');
// }

//challenge
// 1. menentukan bilangan genap dan ganjil
// 2. jadwal pelajaran kalian

// challenge no.1
// var bilangan = prompt('masukkan angka bilangan');

// if(bilangan)







//challenge no.2

// var jadwal = prompt('masukkan hari bre');

// if(jadwal.toLowerCase() == 'senin'){
//     alert('pelajaran : 1.diniyah 2.IT 3.english 4.IT');
// }
// else if(jadwal.toLowerCase()== 'selasa'){
//     alert('pelajaran : 1.diniyah 2.IT 3.english 4.IT');
// }
// else if(jadwal.toLowerCase() == 'rabu'){
//     alert('pelajaran : 1.diniyah 2.english 3.IT 4.english');
// }
// else if(jadwal.toLowerCase() == 'kamis'){
//     alert('pelajaran : 1.diniyah 2.IT 3.english 4.IT');
// }
// else if(jadwal.toLowerCase() == 'jumat'){
//     alert('pelajaran : 1.diniyah 2.IT 3.wali kelas 4.IT');
// }
// else if(jadwal.toLowerCase() == 'sabtu'){
//     alert('pelajaran : 1.MTK 2.IPA 3.B.INDO');
// }
// else if(jadwal.toLowerCase() == 'minggu'){
//     alert('LIBUR BOZZ CAPEK');
// }
// else{
//     alert('masukkan input yang benar');
// }


//percabangan menggunakan switch atau case

//contoh pengguanaan:

// var hari = prompt('masukkan hari yang anda tanyakan :');
// var mapel;

// switch (hari.toLowerCase) {
//     case 'senin':
//         alert('hari ini belajar pemograman web')
//         break;
//     case 'selasa':
//         alert('hari ini belajar pemograman android')
//         break;
//     default:
//         alert('data yang anda masukkan salah')
//         break;
// }



// buat sebuah algoritma penilaian menggunakan huruf dan angka.

// nilai dibawah 60 = D (kureng)
// nilai dibawah 75 = C (cukup)
// nilai dibawah 85 = B (baik)
// nilai diatas 85 = A (ahsanta)
// nilai lebih dari 100 = nilai yang anda masukkan salah

// var nilai = prompt('masukkan nilai yang anda peroleh :')

// switch (true) {
//     case nilai < 60:
//         alert('predikat anda D (kureng)')
//         break;
//     case nilai < 75:
//         alert('predikat anda C (cukup)')
//         break;
//     case nilai < 85:
//         alert('predikat anda B (baguz)')
//         break;
//     case nilai > 85:
//         alert('predikat anda A (ahsanta)')
//         break;    
//     default:
//         alert('nilai yang anda masukkan salah coba konfirmasi ulang')
//         break;
// }

// ternerary
// var nama = prompt('sipakah guru yang paling ganteng ?');
// var jawaban = (nama.toLowerCase() == 'kak fahmi') ? 'benar': 'salah';
// alert(`jawaban yang anda kirim : ${jawaban}`);

//nested brandches

// var username = prompt('masukkan username anda :')
// var password = prompt('masukkan password anda :')

// if(username == 'haikalajah'){
//     if(password == '12345'){
//     alert('anda berhasil login')
//     }
//     else{
//         alert('maaf pw anda salah')
//     }
// }
// else{
//     alert('username tidak ditemukan')
// }

// if(username == 'hekal' && password == 'heheboi'){
//     alert('anda berhasil masuk')
// }
// else{
//     alert('password anda salah')
// }

// study case :
// 1. buatlah sebuah kode program dengan soal pilihan ganda
// jumlah soal : 3; masing2 soal pengerjaanny harus menggunakan :
// if - else-if, switch, nested if-else

// var jawaban = prompt('ikan bernafas menggunakan ? A.insang B.paru-paru C.hati D.trakea')

// if(jawaban == 'A'){
//     alert('jawaban anda benar')
// }
// else if(jawaban == 'B'){
//     alert('jawaban anda salah')
// }
// else if(jawaban == 'C'){
//     alert('jawaban anda salah')
// }
// else if(jawaban == 'D'){
//     alert('jawaban anda salah')
// }

// var soal = prompt('juara MSC 2023 adalah ? A.ONIC B.EVOS C.BTR D.AE')
// var jawaban = prompt('masukkan jawaban anda :')

// if(soal == 'A'){
//     if(jawaban == 'A'){
//     alert('anda benar')
//     }
//     else{
//         alert('maaf jawaban anda salah')
//     }
// }
// else{
//     alert('masukkan jawaban yg benar')
// }

//looping dibagi 2

// 1. countable dan 2. un-countable

// 1. countable itu diantaranya ada (for, foreach, repeat)
// 2. un-countable itu diantaranya ada (while, do/while)

// contoh countable
// for
// for(let i = 0; i < 20; i++){
//     console.log(`angka ini akan diulang sebanyak ${i} kali`)
// }

//foreach

// var mobil = ["toyota", "honda", "ferarri", "ducatti", "zhong tong"];

// mobil.forEach((row) => {
//     console.log(`mobil ini merekny adalah ${row}`)
// });

// var motor = ["suzuki", "mio", "beat", "nmax", "pcx"];

// motor.forEach((bike)=>{
//     document.write("<p>" + bike + "</p>")
// });

// var nama = ["Abdurahman Ilyasa", "Ammar Zahran Syafiq", "Andy Taft", "Arkan Naufal Ardhani", "Azka Azkia Baiquni", "Azka Savir Fauzie", "Faris Dzu Khairil Muna", "Firja Abiyu Alhilali", "Haikal Al Fatih", "Ihsan Ahmad Fakhriansyah", "Mawaldy Adha Majid", "Muhammad Al Fathi Ahyan", "Muhammad Fahri Al Mauludy", "Muhammad Imamussajidin", "Muhammad Keenan Abigail", "Naufal Azriel Al Azizy", "Raihan Ksatria", "Reveeno Dhirgham Putra", "Rizqi Irkham Maulana", "Vallian Sayoga Chandra"]

// var i = 1;

// nama.forEach((urutan, index)=> {
//     document.write("<p>"+index+'.'+urutan+ "</p>")
// });

// for(i = 1; i <= nama.length;)

// nama.forEach(urutan => {
//     nomor = i++
//     document.write("<h3>" + nomor + '.' + urutan + "</h3>");
// });

// console.log("saya sedang belajar java script".repeat100)


// uncountable (while, do/while);
  
// var repeat = true;
// var hitung = 0;

//  while (repeat) {
//     hitung++
//     repeat = confirm("apakah kamu ingin mengulanginy lagi");
//  }
// alert(`anda sudah mengulang sebanyak ${hitung} kali`); = alert('anda sudah mengulang sebanyak' + 'hitung')

 

 
 

 
 
 
 
 
 