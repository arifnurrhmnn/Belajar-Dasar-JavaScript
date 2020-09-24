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

const dog = new Dog("Leo", 4, "Chihuahua"); // instance = membuat object dari class
dog.info(); // memanggil method info() dari class anak


/**
 * TAMBAHAN
 * this.getHumanAge() pemanggilan method dari dalam class
 * dog.info() pemanggilan method dari luar class
 */