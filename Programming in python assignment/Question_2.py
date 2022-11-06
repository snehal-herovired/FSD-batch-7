n = int(input ("Please, Enter the Upper Value: "))  
  
print ("The  sum of  Prime Numbers in the range are: ") 
sum =0
for number in range (2, n + 1):  
    if number > 1:  
        for i in range (2, number):  
            if (number % i) == 0:  
                break  
        else:  
            sum += number
            

print(sum)  