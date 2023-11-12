// filename: complex_code.js

// This code is a complex implementation of a shopping cart functionality integrated with an online payment system
// It utilizes various data structures and algorithms to manage items, calculate totals, and handle payments

// Define the item class
class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Calculate the total price for the item
  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Define the shopping cart class
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  
  // Add an item to the cart
  addItem(item) {
    this.items.push(item);
  }
  
  // Remove an item from the cart
  removeItem(itemName) {
    this.items = this.items.filter(item => item.name !== itemName);
  }
  
  // Calculate the total price of all items in the cart
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
  
  // Generate a receipt string for the items in the cart
  generateReceipt() {
    let receipt = "Receipt:\n";
    receipt += "-------------------------\n";
    
    this.items.forEach(item => {
      receipt += `${item.name} x ${item.quantity}: $${item.getTotalPrice()}\n`;
    });
    
    receipt += "-------------------------\n";
    receipt += `Total: $${this.getTotalPrice()}`;
    
    return receipt;
  }
}

// Define the payment gateway class
class PaymentGateway {
  makePayment(amount, cardNumber, pin) {
    // Simulate payment processing
    console.log(`Processing payment of $${amount}...`);
    console.log(`Payment successful!`);
  }
}

// Example usage:

const cart = new ShoppingCart();

// Add items to the cart
const item1 = new Item("Phone", 799, 1);
const item2 = new Item("Headphones", 149, 2);
cart.addItem(item1);
cart.addItem(item2);

// Remove an item from the cart
cart.removeItem("Headphones");

// Calculate the total price of the cart
const totalPrice = cart.getTotalPrice();
console.log(`Total price: $${totalPrice}`);

// Generate and display the receipt
const receipt = cart.generateReceipt();
console.log(receipt);

// Process payment using the payment gateway
const paymentGateway = new PaymentGateway();
const cardNumber = "1234 5678 9012 3456";
const pin = "123";
paymentGateway.makePayment(totalPrice, cardNumber, pin);