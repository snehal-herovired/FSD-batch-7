# Input charges for 2-wheelers and 4-wheelers from the user
X = float(input("Enter the charge for a 2-wheeler vehicle: "))
Y = float(input("Enter the charge for a 4-wheeler vehicle: "))

# Input number of 2-wheelers and 4-wheelers parked from the user
N = int(input("Enter the number of 2-wheelers parked: "))
M = int(input("Enter the number of 4-wheelers parked: "))

# Calculate the total amount collected for 2-wheelers and 4-wheelers
total_2wheelers = X * N
total_4wheelers = Y * M

# Calculate the overall total amount collected
total_amount_collected = total_2wheelers + total_4wheelers

# Print the total amount collected
print("Total amount collected at the end of the day: $", total_amount_collected)
