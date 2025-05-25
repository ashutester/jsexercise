import { Faker,faker } from "@faker-js/faker";
class Car{
    constructor(){
        this.name = faker.vehicle.model();
    }
    setName(name){
        this.name = name;
    }
    startEngine(){
        console.log('Engine started for car: '+this.name)
    }
    stopEngine(){
        console.log('Engine stopped for car: '+this.name)
    }
}

class Toyota extends Car{
    topSpeed(speed){
        console.log('Top speed for '+this.name + ' is ' + speed)
    }
}

let siyaCar = new Toyota();
siyaCar.topSpeed(200);
siyaCar.setName('BZ');
siyaCar.startEngine();
siyaCar.stopEngine();