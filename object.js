
var motor = {
    nama: "ninja kawasaki", //INI NAMANYA PROPERTY
    warna: "ijo",
    CC: "250cc",
    cylinder: "dual cylinder",
    kerangka: {
        jenis: 'twin tunnel',
        berat: '10 kg',
        bahan: 'platinum aloy'
    }
}
// Object.values(motor).forEach(row => {
//     console.log(row);
// });
// var a = motor.kerangka
// Object.values(a).forEach(child =>{
//     console.log(child);
// })


// buat object dgn function declaration.
// contoh

function mobil(nama, warna, tahun, merek, kerangka) {
    var data = {};
    data.nama = nama;
    data.warna = warna;
    data.tahun = tahun;
    data.merek = merek;
    data.kerangka = kerangka;
    return data;
}
var mobil1 = mobil(
    'mobilnya gwejh',
    'merah',
    '2008',
    'toyota supra',
    kerangka = {
        jenis : 'Esaf',
        berat : '500kg',
        bahan : 'carbon platinum',
        warna : 'hitam metalic'
    });
var mobil = mobil('RPL mancabb', 'hitam', '1945', 'stututututu')
// console.log(mobil1);

// constructor

function siswa(nama, kelaz, nis, nisn, jurusan, kerangka) {
    this.nama = nama;
    this.kelaz = kelaz;
    this.nis = nis;
    this.nisn = nisn;
    this.jurusan = jurusan;
    kerangka = {
        jenis : 'Esaf',
        berat : '500kg',
        bahan : 'carbon platinum',
        warna : 'hitam metalic'
    }
}

var datasiswa = new siswa('ichall', 'X', '3181661861', '13876186816356', 'RPL MANCAB BAGUS SOLID')
// console.log(datasiswa)

// buat sebuah data objek nama nama bus beserta data nya.
// contoh : 
// nama : sinar jaya
// tujuan : jakarta - wonosobo
// code bus : sn-149
// no polisi : AA 1213 BB
// fasilitas : {
    // makan : rest area subang
    // sheat : sleeper sehat
    // toilet : toilet udud
// }

// fasiliats : ac, audio karaoke, selimut, bantal, tv

function harapanjaya(nama, tujuan, codebus, nopolisi, fasilitas) {
    var data = {};
    data.nama = nama;
    data.tujuan = tujuan;
    data.codebus = codebus;
    data.nopolisi = nopolisi;
    data.fasilitas = fasilitas;
    return data;
}
var busharapanjaya = harapanjaya(
    'Harapan Jaya',
    'Makassar - Sulbar',
    'sn-1945',
    'ZZ 5491 AA',
    fasilitas = {
        makan : 'rest area boghe',
        sheat : 'sleeper sehat',
        toilet : 'toilet udud'
    });
// console.log(busharapanjaya)

function pelitajaya(nama, tujuan, codebus, nopolisi, fasilitas,tambahan) {
    this.nama = nama;
    this.tujuan = tujuan;
    this.nopolisi = nopolisi;
    this.codebus = codebus;
    fasilitas = {
        makan : 'rest area boghe',
        sheat : 'sleeper sehat',
        toilet : 'toilet udud'
    }
}
var buspelitajaya = new pelitajaya('pelita jaya', 'keliling dunia', 'ZZ 6758 AA', 'sn-1945')
console.log(buspelitajaya);














