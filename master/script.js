/**
 * Mengimport class dari file lain (class sudah didefinisikan sebelumnya)
 * dog1 dan dog2 = nama constant 
 * ./data/ = pindah ke direktory data didalam direktori yang sama
 * dogData = nama file 
 */
import {
    dog1,
    dog2
} from "./data/dogData"; // mengimport constant dog dari file dogData.js

console.log("---------");
dog1.info(); // memanggil method info() dari class anak
console.log("---------");
dog2.info(); // memanggil method info() dari class anak

/**
 * TAMBAHAN
 * this.getHumanAge() pemanggilan method dari dalam class
 * dog.info() pemanggilan method dari luar class
 */