class Customer {
    constructor(customer_id, customer_name, purchase_date, bill_amount) {
        this.customer_id = customer_id;
        this.customer_name = customer_name;
        this.purchase_date = purchase_date;
        this.bill_amount = bill_amount;
    }
}

// Function to insert a customer into the linked list
function insertCustomer(head, customer) {
    if (head === null) {
        return customer;
    }

    let current = head;
    let prev = null;
    while (current !== null) {
        if (customer.bill_amount < current.bill_amount) {
            break;
        }
        prev = current;
        current = current.next;
    }

    customer.next = current;
    if (prev === null) {
        head = customer;
    } else {
        prev.next = customer;
    }

    return head;
}

// Function to calculate the total purchase amount for a specific year
function calculateTotalPurchaseAmount(head, year) {
    let totalAmount = 0;
    let current = head;
    while (current !== null) {
        const purchaseYear = new Date(current.purchase_date).getFullYear();
        if (purchaseYear === year) {
            totalAmount += current.bill_amount;
        }
        current = current.next;
    }
    return totalAmount;
}

// Function to search for a customer in the linked list
function searchCustomer(head, customer_name) {
    let current = head;
    while (current !== null) {
        if (current.customer_name === customer_name) {
            return current;
        }
        current = current.next;
    }
    return null;
}

// Function to display the customer details based on name
function displayCustomerDetails(head, customer_name) {
    const customer = searchCustomer(head, customer_name);
    if (customer !== null) {
        console.log("Customer ID:", customer.customer_id);
        console.log("Customer Name:", customer.customer_name);
        console.log("Purchase Date:", customer.purchase_date);
        console.log("Bill Amount:", customer.bill_amount);
    } else {
        console.log("Customer not found.");
    }
}

// Example usage:

// Create a linked list for customer data
let head = null;
head = insertCustomer(head, new Customer(1, "Alice", "01/01/2022", 100.50));
head = insertCustomer(head, new Customer(2, "Bob", "02/15/2022", 75.80));
head = insertCustomer(head, new Customer(3, "Charlie", "03/21/2022", 200.25));
head = insertCustomer(head, new Customer(4, "Dave", "04/05/2022", 50.90));

// View all customer data in sorted order based on bill amount
console.log("All Customer Data (Sorted by Bill Amount):");
let current = head;
while (current !== null) {
    console.log("Customer ID:", current.customer_id);
    console.log("Customer Name:", current.customer_name);
    console.log("Purchase Date:", current.purchase_date);
    console.log("Bill Amount:", current.bill_amount);
    console.log("-----------------------");
    current = current.next;
}

// View the total purchase amount for a specific year
const year = 2022;
const totalAmount = calculateTotalPurchaseAmount(head, year);
console.log(`Total Purchase Amount for Year ${year}: $${totalAmount.toFixed(2)}`);

// View details of a specific customer based on name
const customerName = "Bob";
displayCustomerDetails(head, customerName);
