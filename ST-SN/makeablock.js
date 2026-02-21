class Block{
    constructor(weight, height, length) {
        this.weight = weight;
        this.height = height;
        this.length = length;
    }

    getWeight() {
        return this.weight;
    }

    getHeight() {
        return this.height;
    }

    getLength() {
        return this.length;
    }

    getVolume() {
        return this.height * this.length * this.weight;
    }

    getSurfaceArea() {
        return 2 * (this.length * this.height + this.length * this.weight + this.height * this.weight);
    }
}
let b = new Block(2, 3, 4);
console.log(b.getVolume());
console.log(b.getHeight());
console.log(b.getLength());
console.log(b.getSurfaceArea());