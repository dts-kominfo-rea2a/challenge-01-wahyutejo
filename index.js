// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

// Kolom Pendidikan firstUser
const firstEducation1 = {};
firstEducation1.name = "SD 01";
firstEducation1.city = "Jakarta";
firstEducation1.graduate = "2016";

const firstEducation2 = {};
firstEducation2.name = "SMP 02";
firstEducation2.city = "Jakarta";
firstEducation2.graduate = "2019";

const firstEducation3 = {};
firstEducation3.name = "SMA 03";
firstEducation3.city = "Tangerang";

const firstUserEducation = [];
firstUserEducation.push(firstEducation1, firstEducation2, firstEducation3);

// Tabel warna
let warna1 = new Set("Yellow");
let warna2 = new Set("Pink");
let warna3 = new Set("White");
let warna4 = new Set("Purple");

let firstFavoriteColor = [];
firstFavoriteColor.push(warna1, warna2, warna3, warna4);

// Tabel favoriteRestaurant
let firstResto1 = new Set("Bento");
let firstResto2 = new Set("Sushi");
let firstResto3 = new Set("Pancake");
let firstResto4 = new Set("Eggy");
let firstResto5 = new Set("Tempura");
let firstResto6 = new Set("Padang");
let firstResto7 = new Set("Tteok");

let firstResto = [];
firstResto.push(firstResto1, firstResto2, firstResto3, firstResto4, firstResto5, firstResto6, firstResto7);

// Tabel firstUser
firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
firstUser.favoriteColor = firstFavoriteColor;
firstUser.isHavePet = "Yes";
firstUser.education = firstUserEducation;
firstUser.favoriteRestaurant = firstResto;

// Pendidikan secondUser
const secondEducation1 = {};
secondEducation1.name = "SD 02";
secondEducation1.city = "Jakarta";
secondEducation1.graduate = "2010";

const secondEducation2 = {};
secondEducation2.name = "SMP 03";
secondEducation2.city = "Bogor";
secondEducation2.graduate = "2013";

const secondEducation3 = {};
secondEducation3.name = "SMA 01";
secondEducation3.city = "Surabaya";
secondEducation3.graduate = "2016";

const secondEducation4 = {};
secondEducation4.name = "Universitas Maju";
secondEducation4.city = "Tangerang";

const secondUserEducation = [];
secondUserEducation.push(secondEducation1, secondEducation2, secondEducation3, secondEducation4);

// Kolom favoriteColor
let secondWarna1 = new Set("Blue");
let secondWarna2 = new Set("Black");
let secondWarna3 = new Set("Gray");

let secondFavoriteColor = [];
secondFavoriteColor.push(secondWarna1, secondWarna2, secondWarna3);

// Kolom favoriteRestaurant
let secondResto1 = new Set("Tempura");
let secondResto2 = new Set("Bento");
let secondResto3 = new Set("Sushi");
let secondResto4 = new Set("Pancake");
let secondResto5 = new Set("Padang");
let secondResto6 = new Set("Katsu");
let secondResto7 = new Set("Geprek");
let secondResto8 = new Set("Eggy");

let secondResto = [];
secondResto.push(secondResto1, secondResto2, secondResto3, secondResto4, secondResto5, secondResto6, secondResto7, secondResto8);

// Kolom secondUser
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
secondUser.favoriteColor = secondFavoriteColor;
secondUser.isHavePet = "No";
secondUser.education = secondUserEducation;
secondUser.favoriteRestaurant = secondResto;

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

users.push(firstUser, secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
