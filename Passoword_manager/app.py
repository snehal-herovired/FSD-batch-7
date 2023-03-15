import hashlib

# Store usernames and passwords in a dictionary
users = {"example@gmail.com": hashlib.sha256(b"password123").hexdigest()}

# Store application passwords in a dictionary
passwords = {}

# Login function
def login():
    while True:
        email = input("Enter your email: ")
        password = hashlib.sha256(input("Enter your password: ").encode("utf-8")).hexdigest()
        if email in users and users[email] == password:
            print("Login successful!")
            return email
        else:
            print("Invalid email or password. Please try again.")

# Menu function
def menu():
    print("Welcome to the Password Manager!")
    email = login()
    while True:
        print("MENU")
        print("1. Enter Password")
        print("2. View Password")
        print("3. Delete Password")
        print("4. Exit")
        choice = input("Enter your choice (1-4): ")
        if choice == "1":
            app = input("Enter the name of the application: ")
            password = input("Enter the password: ")
            passwords[app] = password
            print("Password saved!")
        elif choice == "2":
            if len(passwords) == 0:
                print("No passwords stored.")
            else:
                print("Stored passwords:")
                for app in passwords:
                    print(f"{app}: {passwords[app]}")
        elif choice == "3":
            if len(passwords) == 0:
                print("No passwords stored.")
            else:
                app = input("Enter the name of the application to delete: ")
                if app in passwords:
                    del passwords[app]
                    print(f"{app} password deleted!")
                else:
                    print(f"No password stored for {app}.")
        elif choice == "4":
            print("Exiting Password Manager.")
            break
        else:
            print("Invalid choice. Please try again.")

# Call the menu function
menu()
