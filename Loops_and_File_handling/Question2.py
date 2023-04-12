# Pattern of numbers

n = 4  # Number of rows in pattern
for i in range(n):
    for j in range(i + 1):
        print(j, end=" ")
    print()
