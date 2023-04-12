def print_diamond_pattern(n):
    # Loop for upper half of diamond pattern
    for i in range(1, n+1):
        # Print spaces before the numbers
        print(" " * (n - i), end="")
        # Print numbers in increasing order
        for j in range(1, i + 1):
            print(j, end="")
        # Print numbers in decreasing order
        for j in range(i - 1, 0, -1):
            print(j, end="")
        print()

    # Loop for lower half of diamond pattern
    for i in range(n-1, 0, -1):
        # Print spaces before the numbers
        print(" " * (n - i), end="")
        # Print numbers in increasing order
        for j in range(1, i + 1):
            print(j, end="")
        # Print numbers in decreasing order
        for j in range(i - 1, 0, -1):
            print(j, end="")
        print()

# Input from user
n = int(input("Enter a number: "))

# Call the function to print diamond pattern
print_diamond_pattern(n)
