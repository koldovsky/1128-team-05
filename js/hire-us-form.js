const form = document.getElementById("index-form__contact-form-id");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("index-form__form-status");
  if (!validateForm()) {
    return;
  } 
  const data = new FormData(event.target);
  const response = await fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
    form.reset();
  }
}
function validateForm() {
  let wasChange = false;
  const emailInput = document.getElementById("index-form__input-form-email");
  const email = emailInput.value;
  const numberInput = document.getElementById(
    "index-form__input-form-phone-number"
  );
  const number = numberInput.value;
  if (!validatePhoneNumber(number)) {
    setNumberStyles(numberInput);
    return false;
  } else {
    resetNumberStyles(numberInput);
  }

  if (!validateEmail(email)) {
    setEmailStyles(emailInput);
    return false;
  } else {
    resetEmailStyles(emailInput);
  }
  return true;
}

form.addEventListener("submit", handleSubmit);

function validatePhoneNumber(number) {
  if (!/^\d+$/.test(number) || number.length < 8 || number.length > 15) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  return email.includes("@");
}

function setNumberStyles(numberInput) {
  numberInput.style.border = "1px solid red";
  numberInput.value = "";
  numberInput.placeholder = "Invalid phone number!";
}
function resetNumberStyles(numberInput) {
  numberInput.style.border = "none";
  numberInput.placeholder = "Enter your phone number";
}
function setEmailStyles(emailInput) {
  emailInput.style.border = "1px solid red";
  emailInput.value = "";
  emailInput.placeholder = "Invalid email!";
}
function resetEmailStyles(emailInput) {
  emailInput.style.border = "none";
  emailInput.placeholder = "Enter your email";
}
