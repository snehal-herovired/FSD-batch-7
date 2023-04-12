# Reading from and writing to a file

# Creating a sample file
with open("sample_file.txt", "w") as file:
    file.write("Hi, I am learning python.")  # Writing content to file
    print("Sample file created successfully!")

# Reading from the created file
with open("sample_file.txt", "r") as file:
    content = file.read()  # Reading content from file
    print("Content of the file:", content)

# Appending to the created file
with open("sample_file.txt", "a") as file:
    file.write(" I am enjoying it!")  # Appending content to file
    print("Content appended to the file successfully!")
