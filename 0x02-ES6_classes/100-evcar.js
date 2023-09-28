import Car from './10-car.js';

const rangeSymbol = Symbol('range');

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[rangeSymbol] = range;
  }

  cloneCar() {
    const { [brandSymbol]: brand, [motorSymbol]: motor, [colorSymbol]: color } = this;
    return new Car(brand, motor, color);
  }
}

export default EVCar;
