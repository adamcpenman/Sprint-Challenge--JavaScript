// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker (shape) {
//   this.length = shape.length,
//   this.width = shape.width,
//   this.height = shape.height
// }

class CuboidMaker1 {
    constructor(shape) {
        this.length = shape.length,
        this.width = shape.width,
        this.height = shape.height;
    }
    volume () {
        return this.length * this.width * this.height;
    }
    surfaceArea () {
        return 2 * (this.length * this.width + this.length * this.height + this.width  * this.height);
    }
}

class CubeMaker extends CuboidMaker1 {
    constructor(cubes) {
        super(cubes)
        
    }
      volume () {
        return this.length * this.width * this.height;
    }
    surfaceArea () {
        return 2 * (this.length * this.width + this.length * this.height + this.width  * this.height);
    }
}


// CuboidMaker.prototype.volume = function () {
//   return this.length * this.width * this.height ;
// }

// CuboidMaker.prototype.surfaceArea = function () {
// return 2 * (this.length * this.width + this.length * this.height + this.width  * this.height);
// } 

const cuboid1 = new CuboidMaker1 ({
  length: 4,
  width: 5,
  height: 5
});

const babycuboid = new CubeMaker ({
    length: 2,
    width: 3,
    height: 3
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130
console.log(babycuboid.volume());
console.log(babycuboid.surfaceArea());



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes 
//and create those methods using the dimension properties from CuboidMaker. 
// Test your work by logging out your volume and surface area.

//THE stretch goal states to FIND OUT THE FORMULAS FOR VOLUME AND SURFACE AREA FOR CUBES but we already have 
//the forumlas for a cubes with this challenge. I still created a sub class called CubeMaker and gave it different
// amounts, but that was weird usage of words since, again, we have the forumales already. 