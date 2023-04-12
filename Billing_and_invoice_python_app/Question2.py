import csv
import datetime
from jinja2 import Template

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

# Function to write invoice details to invoice.csv
def write_invoice_details(product_name, quantity, total):
    invoice_id = generate_invoice_id()
    with open('invoice.csv', 'a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([invoice_id, product_name, quantity, total])

# Function to generate invoice ID
def generate_invoice_id():
    current_year = datetime.datetime.now().year
    invoice_id = f"{current_year}{len(invoice_data) + 1:04d}"
    return invoice_id

# Function to generate HTML invoice
def generate_html_invoice(invoice_id, customer_name, product_name, quantity, total):
    template = Template('''
        <h1>Invoice</h1>
        <p>Invoice ID: {{ invoice_id }}</p>
        <p>Customer Name: {{ customer_name }}</p>
        <p>Product Name: {{ product_name }}</p>
        <p>Quantity: {{ quantity }}</p>
        <p>Total: {{ total }}</p>
    ''')
    html = template.render(invoice_id=invoice_id, customer_name=customer_name, product_name=product_name, quantity=quantity, total=total)
    with open(f'Invoice_{invoice_id}.html', 'w') as file:
        file.write(html)
    print(f"Invoice generated as Invoice_{invoice_id}.html")

# Main function
def invoice_generating_application():
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

    # Write invoice details to invoice.csv
    product_info = product_details[product_id]
    product_name = product_info['product_name']
    write_invoice_details(product_name, quantity, total)

    # Generate HTML invoice
    generate_html_invoice(generate_invoice_id(), customer_name, product_name, quantity, total)

    print("Invoice details written to invoice.csv successfully.")

# Call the main function
invoice_generating_application()
