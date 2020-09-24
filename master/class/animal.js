/**
 * CLass Induk
 */
class Animal {
    /**
     * Constructor / method utama dalam class
     * @param name menerima nilai name
     * @param age menerima nilai age
     */
    constructor(name, age) {
        this.name = name; // membuat property name dan nilai
        this.age = age; // membuat property age dan nilai
    }

    /**
     * Membuat method greed()
     */
    greet() {
        console.log("Halo"); // melakukan print
    }

    /**
     * Membuat method info()
     */
    info() {
        this.greet(); // memanggil method greet()
        console.log(`Nama saya adalah ${this.name}`); // memanggil property name dari method cosntructor
        console.log(`Saya berusia ${this.age} tahun`); // memanggil property age dari method constructor
    }
}

/**
 * mengexport class untuk diteruskan ke file yang berbeda
 */
export default Animal; // memperbolehkan class Animal di gunakan di file lain