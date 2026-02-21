class Cuboid {
    constructor(weight, height, length) {
        this.weight = weight;
        this.height = height;
        this.length = length;
    }

    getWeight() {
        return this.weight;
    };

    getHeight() {
        return this.height;
    };

    getLength() {
        return this.length;
    };

    getSurfaceArea() {
        return 2 * (this.length * this.height + this.length * this.weight + this.height * this.weight);
    };

    getVolume() {
        return this.height * this.length * this.weight;
    };
}

class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}

let cu = new Cuboid(4, 8, 6);
console.log(cu.getVolume());
console.log(cu.getSurfaceArea());

let cube = new Cube(cu.getLength());
console.log(cube.getVolume());