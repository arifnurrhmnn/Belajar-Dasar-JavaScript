/**
 * Mengimport class dari file lain (class sudah didefinisikan sebelumnya)
 * Animal = nama class
 * ./ = direktori yang sama
 * animal = nama file 
 */
import Animal from "./animal"; // mengimport class Animal dari file animal.js

/**
 * Class Anak (Inheritance/Pewarisan)
 */
class Dog extends Animal { // extends untuk menerima warisan
    /**
     * Constructor / method utama dalam class
     */
    constructor(name, age, breed) {
        super(name, age); // super() untuk memanggil constructor class induk
        this.breed = breed; //membuat prperty breed dan nilai
    }

    /**
     * Membuat method info()
     */
    info() {
        this.greet(); // memanggil method greet()
        console.log(`Nama saya adalah ${this.name}`); // memanggil property name dari method costructor class anak
        console.log(`Saya adalah seekor ${this.breed}`); // memanggil property breed dari method costructor class anak
        console.log(`Saya berusia ${this.age} tahun`); // memanggil property age dari method costructor class anak

        const humanAge = this.getHumanAge(); // menetapkan nilai method getHumanAge() ke constant humanAge
        console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`); // menampilkan nilai constaant humanAge
    }

    /**
     * Membuat method getHumanAge()
     */
    getHumanAge() {
        return this.age * 7; //mengembalikan nilai age 
    }
}

/**
 * mengexport class untuk diteruskan ke file yang berbeda
 */
export default Dog; // memperbolehkan class Dog di gunakan di file lain