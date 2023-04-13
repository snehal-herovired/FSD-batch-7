// Function to find the smallest prime divisor of a number
function smallestPrimeDivisor(num) {
    if (num <= 1) return -1; // Return -1 if the number is less than or equal to 1
  
    // Loop to check for smallest prime divisor
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return i; // If a divisor is found, return it as smallest prime divisor
    }
    return num; // If no divisor is found, the number itself is the smallest prime divisor
  }
  
  // Function to spin the given array of numbers anticlockwise by a given count
  function spinArray(arr, count) {
    // Create a queue to store the numbers
    const queue = [];
    for (let i = 0; i < arr.length; i++) {
      queue.push(arr[i]); // Enqueue all numbers from the array
    }
  
    // Spin the array anticlockwise by dequeuing and enqueuing elements
    for (let i = 0; i < count; i++) {
      const num = queue.shift(); // Dequeue the first element
      queue.push(num); // Enqueue the dequeued element to the end
    }
  
    return queue; // Return the spun array
  }
  
  // Function to get the password for the device
  function getPassword(arr, n) {
    const smallestPrime = Math.min(...arr.filter(num => num > 1)); // Find the smallest prime number
    const sum = arr.reduce((acc, num) => acc + num, 0); // Find the sum of the given numbers
    const password = sum % smallestPrimeDivisor(smallestPrime) || smallestPrimeDivisor(sum); // Get the password using modulo with smallest prime or smallest prime divisor of sum
    const spunArray = spinArray(arr, password); // Spin the array anticlockwise by the password count
    return spunArray; // Return the password as spun array
  }
  
  // Example usage
  const arr1 = [90, 45, 37, 80, 1, 46];
  const n1 = 6;
  const password1 = getPassword(arr1, n1);
  console.log("Password 1:", password1); // Output: [80, 1, 46, 90, 45, 37]
  
  const arr2 = [90, 45, 78, 27, 63];
  const n2 = 5;
  const password2 = getPassword(arr2, n2);
  console.log("Password 2:", password2); // Output: [27, 63, 90, 45, 78]
  