let userDetails = function (name, age){
    this.name = name;
    this.age = age;
};

userDetails.prototype.setPlan = function(planName){
    this.planName = planName;
};
userDetails.prototype.getPlan = function(){
    return this.planName;
};

let user1 = new userDetails('Archana',75);
let user2 = new userDetails('Vijay',65)
user1.setPlan('Solo');
user2.setPlan('Duo');
console.log(user1.name);
console.log(user1.age);
console.log(user1.getPlan());
console.log('---------------------X-----------');
console.log(user2.name);
console.log(user2.age);
console.log(user2.getPlan());
