/**
 * Mengimport class dari file lain (class sudah didefinisikan sebelumnya)
 * Dog = nama class
 * ../ = pindah ke satu level direktori / keluar dari direkrtory data
 * class/ = pindah ke direktori class
 * dog = nama file 
 */
import Dog from "../class/dog"; // mengimport class Dog dari file dog.js


const dog1 = new Dog("Leo", 4, "Chihuahua"); // instance = membuat object dari class
const dog2 = new Dog("Ben", 2, "Poodle"); // instance = membuat object dari class

/**
 * export bername
 * mengexport constant untuk diteruskan ke file yang berbeda
 * constant dog1 dan dog2 merupakan instance milik class Dog
 */
export {
    dog1,
    dog2
}; // memperbolehkan constant dog1, dog2 di gunakan di file lain