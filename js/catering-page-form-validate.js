document.addEventListener("partialsLoaded", () => {
    import("./header.js");
});

function validateForm() {
    const fullName = document.contactForm.fullName.value;
    const phoneNumber = document.forms[0]["phoneNumber"].value;
    const email = document.forms[0]["email"].value;

    if (fullName.trim() === "" || phoneNumber.trim() === "" || email.trim() === "") {
        alert("Please fill in all required fields");
        return false; 
    }

    return true; 
  }