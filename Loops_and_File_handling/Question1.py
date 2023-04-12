# Fibonacci series using loops

def fibonacci(n):
    fib_series = [0, 1]  # Initialize with first two terms
    for i in range(2, n):
        fib_series.append(fib_series[-1] + fib_series[-2])  # Add last two terms to get next term
    return fib_series

n = 7  # Number of terms in Fibonacci series
fib_series = fibonacci(n)
print("Fibonacci series up to", n, "terms:", fib_series)
