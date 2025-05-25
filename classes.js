import { simpleFaker } from "@faker-js/faker";
class Order {
  constructor() {
    this.orderId = simpleFaker.number.int(10000000);
  }
  createOrder(custName) {
    this.custName = custName;
  }
  getOrderId() {
    return this.orderId;
  }
  getcustName() {
    return this.custName;
  }
}

let cust = new Order();
cust.createOrder("Nandini");
console.log(cust.getOrderId());
console.log(cust.getcustName());
