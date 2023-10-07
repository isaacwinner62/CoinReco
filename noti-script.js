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

function copyToClipboard() {
  const textToCopy = document.getElementById("text-to-copy").innerText;

  // Create a temporary textarea element to hold the text
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  // Select the text and copy it to the clipboard
  textarea.select();
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(textarea);

}

window.history.replaceState({}, 'Your Website', '/');