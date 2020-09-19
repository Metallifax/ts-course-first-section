class Vehicle {

  constructor(public color: string) { }

  drive(): void {
    console.log('Chugga chugga.');
  }

  protected honk(): void {
    console.log('Beep.');
  }
}

class Car extends Vehicle {

  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("vroom vroom.");
  }
  public useDrive(): void {
    this.drive();
  }
  public startDrivingProcess(): void {
    this.useDrive();
    this.honk();
  }
}

const anotherCar = new Car(4, 'orange');
console.log(anotherCar.color);