// Retrieve the value from localStorage
var retrievedValue = localStorage.getItem("inputValue1");
var retrievedValue2 = localStorage.getItem("inputValue2");

// Check if the value is available
if (retrievedValue && retrievedValue2) {
  // Display the value on the page (e.g., in a div with id "display-value")
  var displayElement = document.getElementById("display-value");
  var displayElement2 = document.getElementById("display-value2");
  if (displayElement && displayElement2) {
    displayElement.textContent = retrievedValue;
    displayElement2.textContent = retrievedValue2;
  }
} else {
  console.log("No value found in localStorage.");
}
