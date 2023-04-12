import csv

# Function to load product details from product_details.csv
def load_product_details():
    product_details = {}
    with open('product_details.csv', 'r') as file:
        reader = csv.reader(file)
        next(reader)  # Skip header
        for row in reader:
            product_id = int(row[0])
            product_name = row[1]
            product_price = float(row[2].replace('Rs.', '').strip())
            product_details[product_id] = {'product_name': product_name, 'product_price': product_price}
    return product_details

# Function to display product details
def display_product_details(product_details):
    print("Product Details:")
    print("Product ID | Product Name | Product Price (Rs.)")
    print("----------------------------------------------")
    for product_id, product_info in product_details.items():
        print(f"{product_id} | {product_info['product_name']} | {product_info['product_price']}")

# Function to calculate total amount
def calculate_total(product_details, product_id, quantity):
    product_info = product_details[product_id]
    product_price = product_info['product_price']
    total = product_price * quantity
    return total

# Function to write billing details to billing_details.csv
def write_billing_details(customer_name, product_name, quantity, total):
    with open('billing_details.csv', 'a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([customer_name, product_name, quantity, total])

# Main function
def billing_application():
    product_details = load_product_details()
    display_product_details(product_details)

    # Input from user
    product_id = int(input("Enter Product ID: "))
    while product_id not in product_details:
        print("Invalid Product ID. Please choose a valid Product ID.")
        product_id = int(input("Enter Product ID: "))
    quantity = int(input("Enter Quantity: "))
    customer_name = input("Enter Customer Name: ")

    # Calculate total amount
    total = calculate_total(product_details, product_id, quantity)

    # Write billing details to billing_details.csv
    product_info = product_details[product_id]
    product_name = product_info['product_name']
    write_billing_details(customer_name, product_name, quantity, total)

    print("Billing Details written to billing_details.csv successfully.")

# Call the main function
billing_application()
