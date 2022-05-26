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
let firstFavoriteColor = new Set();
firstFavoriteColor.add("Yellow");
firstFavoriteColor.add("Pink");
firstFavoriteColor.add("White");
firstFavoriteColor.add("Purple");

// Tabel favoriteRestaurant
let firstFavoriteRestautant = new Set();
firstFavoriteRestautant.add("Bento");
firstFavoriteRestautant.add("Sushi");
firstFavoriteRestautant.add("Pancake");
firstFavoriteRestautant.add("Eggy");
firstFavoriteRestautant.add("Tempura");
firstFavoriteRestautant.add("Bento");
firstFavoriteRestautant.add("Eggy");
firstFavoriteRestautant.add("Padang");
firstFavoriteRestautant.add("Tteok");
firstFavoriteRestautant.add("Sushi");
firstFavoriteRestautant.add("Sushi");

// Tabel firstUser
firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
firstUser.favoriteColor = firstFavoriteColor;
firstUser.isHavePet = "Yes";
firstUser.education = firstUserEducation;
firstUser.favoriteRestaurant = firstFavoriteRestautant;

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
let secondFavoriteColor = new Set();
secondFavoriteColor.add("Blue");
secondFavoriteColor.add("Black");
secondFavoriteColor.add("Gray");

// Kolom favoriteRestaurant
let secondFavoriterestaurant = new Set();
secondFavoriterestaurant.add("Tempura");
secondFavoriterestaurant.add("Bento");
secondFavoriterestaurant.add("Sushi");
secondFavoriterestaurant.add("Pancake");
secondFavoriterestaurant.add("Padang");
secondFavoriterestaurant.add("Katsu");
secondFavoriterestaurant.add("Geprek");
secondFavoriterestaurant.add("Pancake");
secondFavoriterestaurant.add("Eggy");

// Kolom secondUser
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
secondUser.favoriteColor = secondFavoriteColor;
secondUser.isHavePet = "No";
secondUser.education = secondUserEducation;
secondUser.favoriteRestaurant = secondFavoriterestaurant;

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
