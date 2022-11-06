n = int(input("Enter your value on n :"))
print("Pattern 1")
for s1 in range(1, (n+1)//2 + 1):
    for s2 in range((n+1)//2 - s1):
        print(" ", end = "")
    for s3 in range((s1*2)-1):
        print("*", end = "")
    print()

for s1 in range((n+1)//2 + 1, n + 1): 
    for s2 in range(s1 - (n+1)//2):
        print(" ", end = "")
    for s3 in range((n+1 - s1)*2 - 1):
        print("*", end = "")
    print()
    