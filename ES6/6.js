// 

// Go ahead and define your class :)
class Cube {
    constructor(length) {
      this.length = length;
    }
  
    get surfaceArea() {
      return 6 * this.length ** 2; 
    }
  
    set surfaceArea(area) {
      this.length = Math.sqrt(area / 6); 
    }
  
    get volume() {
      return this.length ** 3; 
    }
  
    set volume(vol) {
      this.length = Math.cbrt(vol); 
    }
  }
  
  
  const cube = new Cube(3);
  console.log(cube.surfaceArea); 
  console.log(cube.volume);      
  
  cube.surfaceArea = 96; 
  console.log(cube.length);
  console.log(cube.volume); 
  
  cube.volume = 125; 
  console.log(cube.length);
  console.log(cube.surfaceArea);