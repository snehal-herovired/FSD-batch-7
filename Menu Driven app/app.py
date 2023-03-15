def factorial(num):
    if num == 0:
        return 1
    else:
        return num * factorial(num-1)

def is_palindrome(num):
    return str(num) == str(num)[::-1]

def fibonacci(num):
    if num <= 1:
        return num
    else:
        return fibonacci(num-1) + fibonacci(num-2)

def table(num):
    for i in range(1, 11):
        print(f"{num} x {i} = {num*i}")

while True:
    print("Select an option:")
    print("1. Factorial")
    print("2. Palindrome")
    print("3. Fibonacci")
    print("4. Table")
    print("5. Quit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        num = int(input("Enter a number: "))
        print(f"Factorial of {num} is {factorial(num)}")
    elif choice == 2:
        num = int(input("Enter a number: "))
        if is_palindrome(num):
            print(f"{num} is a palindrome")
        else:
            print(f"{num} is not a palindrome")
    elif choice == 3:
        num = int(input("Enter the length of the Fibonacci sequence: "))
        print("Fibonacci sequence:")
        for i in range(num):
            print(fibonacci(i))
    elif choice == 4:
        num = int(input("Enter a number: "))
        table(num)
    elif choice == 5:
        print("Goodbye!")
        break
    else:
        print("Invalid choice. Please try again.")
