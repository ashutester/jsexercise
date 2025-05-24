class Employee{
    getEmpId(){
        return this.empId;
    }
    getEmpName(){
        return this.empName
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
    setEmpDetails(empId,empName,phoneNumber){
        this.empId = empId;
        this.empName = empName;
        this.phoneNumber = phoneNumber;
    }
}

let ashutosh = new Employee();
ashutosh.setEmpDetails(1001,'Ashutosh Bapat',6048180724);
console.log(ashutosh.getEmpId());
console.log(ashutosh.getEmpName());
console.log(ashutosh.getPhoneNumber());
