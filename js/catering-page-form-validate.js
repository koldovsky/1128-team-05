document.addEventListener("partialsLoaded", () => {
  import("./header.js");
});

// function validateForm() {
//     const fullName = document.contactForm.fullName.value;
//     const phoneNumber = document.forms[0]["phoneNumber"].value;
//     const email = document.forms[0]["email"].value;

//     if (fullName.trim() === "" || phoneNumber.trim() === "" || email.trim() === "") {
//         alert("Please fill in all required fields");
//         return false;
//     }

//     return true;
//   }
function preventSendingEmptyFields(event) {
  event.preventDefault();

  if (fullName.value === "") {
    errorMessage[0].innerHTML = "User name can not be blank";
  } else {
    errorMessage[0].innerHTML = "";
  }
  if (phoneNumber.value === "") {
    errorMessage[1].innerHTML = "Phone number can not be blank";
  } else {
    errorMessage[1].innerHTML = "";
  }
  if (email.value === "") {
    errorMessage[2].innerHTML = "E-mail can not be blank";
  } else {
    errorMessage[2].innerHTML = "";
  }
}

function validatePhoneNumber(event) {
  const regularExpressionOfNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const isRightFhoneNumber = regularExpressionOfNumber.test(phoneNumber);
  if (!isRightFhoneNumber) {
    document.getElementById("phone-erorr-message").classList.remove("hidden");

    document.getElementById("phone-erorr-message").innerHTML =
      "This format does not allow";
  } else {
    document.getElementById("phone-erorr-message").classList.add("hidden");
    document.getElementById("phone-erorr-message").innerHTML = "";
    alert("success phone validation");
  }
  event.preventDefault();
}

function validateForm(event) {
  preventSendingEmptyFields(event);
  validatePhoneNumber(event);
  preventSendingEmptyFields(event);
}

let formRequest = document.getElementById("form-request");
let fullName = document.getElementById("fullName");
let phoneNumber = document.getElementById("phoneNumber");
let email = document.getElementById("email");

let errorMessage = document.getElementsByClassName("error-message");

formRequest.addEventListener("submit", validateForm);
