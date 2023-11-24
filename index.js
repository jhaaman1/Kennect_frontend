// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to get all prime numbers in a given range
function getPrimesInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function checkPrimes() {
  const start = parseInt(document.getElementById("start").value);
  const end = parseInt(document.getElementById("end").value);

  // Clear previous results
  const primeResultsContent = document.getElementById("primeResultsContent");
  primeResultsContent.innerHTML = "";

  let totalSingleTime = 0;
  let totalMultipleTime = 0;

  for (let i = start; i <= end; i++) {
    const startTimeSingle = performance.now();
    const isPrimeResult = isPrime(i);
    const endTimeSingle = performance.now();
    totalSingleTime += endTimeSingle - startTimeSingle;

    const startTimeMultiple = performance.now();
    // Additional operation for 2.c if the number is prime
    if (isPrimeResult) {
      // Add your additional operation here
    }
    const endTimeMultiple = performance.now();
    totalMultipleTime += endTimeMultiple - startTimeMultiple;

    // Add row to the primeResultsContent table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${i}</td><td>${
      isPrimeResult ? "Prime" : "Normal"
    }</td><td>${(endTimeSingle - startTimeSingle).toFixed(5)}</td>`;
    primeResultsContent.appendChild(newRow);
  }

  // Calculate averages
  const avgSingleNumber = (end + start) / 2; // Average of the numbers
  const avgMultipleNumber = isFinite(end + start) ? (end + start) / 2 : "N/A"; // Check for division by zero
  const avgSingleTime = totalSingleTime / (end - start + 1);
  const avgMultipleTime = totalMultipleTime / (end - start + 1);

  // Display averages in the Bootstrap modal
  document.getElementById("avgSingleNumber").textContent =
    avgSingleNumber.toFixed(2);
  document.getElementById("avgMultipleNumber").textContent = avgMultipleNumber;
  document.getElementById("avgSingleTime").textContent =
    avgSingleTime.toFixed(5);
  document.getElementById("avgMultipleTime").textContent =
    avgMultipleTime.toFixed(5);

  // Show both Bootstrap modals
  $("#primeResultsModal").modal("show");

  // Set a delay before showing the second Bootstrap modal
  setTimeout(function () {
    $("#averageModal").modal("show");
  }, 500); // Adjust the delay (in milliseconds) as needed
}
