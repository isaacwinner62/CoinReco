document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.querySelector(".create-btn");
  const inputFields = document.querySelectorAll(".inputt");

  createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let allFieldsFilled = true;

    // Check if all input fields have values
    for (const inputField of inputFields) {
      if (inputField.value.trim() === "") {
        allFieldsFilled = false;
        break;
      }
    }

    if (allFieldsFilled) {
      // All input fields are filled, redirect to noti.html
      createBtn.innerHTML = "Loading...";
      setTimeout(() => {
        window.location.href = "noti.html";
      }, 1000);

      // Save input values to localStorage
      inputFields.forEach((inputField, index) => {
        localStorage.setItem(`inputValue${index + 1}`, inputField.value);
      });
    }
  });

  window.history.replaceState({}, "Your Website", "/");
});
