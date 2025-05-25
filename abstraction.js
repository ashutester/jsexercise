function Employee(name,age,baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 1000;
    
    
    let caculateFinalSalary  = function(){
     let finalSalary = baseSalary + monthlyBonus;
     console.log(`Final Salary after ading bonus is : ${finalSalary}`);
    }

    this.getEmpDetails = function(){
        console.log('Name : ' + this.name+' | Age : '+this.age);
        caculateFinalSalary();
    }

}

let obj1 = new Employee('Abhijeet',32,80000);
obj1.getEmpDetails();