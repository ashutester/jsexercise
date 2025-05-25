class Dog {
  constructor(name){
    this.name = name; 
  }
  eats(){
    console.log(this.name+ ' eats food.')
  }
}
class alligator extends Dog{
  eats(){
    console.log(this.name + ' eats fishes');
  }
}

let obj1 = new Dog('Tulip');
obj1.eats();
let obj2 = new alligator('Damu');
obj2.eats();
