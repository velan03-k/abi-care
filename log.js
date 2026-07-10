// ====================== REGEX ======================
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
const namePattern = /^[A-Za-z ]+$/;

// ====================== INPUTS ======================
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("signup-email");
const password = document.getElementById("signup-password");
const confirmPassword = document.getElementById("confirm-password");

// ====================== ERROR DIVS ======================
const val1 = document.getElementById("val1");
const val2 = document.getElementById("val2");
const val3 = document.getElementById("val3");
const val4 = document.getElementById("val4");
const val5 = document.getElementById("val5");

// ====================== FUNCTIONS ======================

function showError(input, element, message) {
    input.classList.remove("border-green-500");
    input.classList.add("border-red-500");

    element.innerHTML =
        `<p class="text-red-500 text-sm mt-1">
            <i class="fa-solid fa-circle-exclamation mr-1"></i>${message}
        </p>`;
}

function showSuccess(input, element, message) {
    input.classList.remove("border-red-500");
    input.classList.add("border-green-500");

    element.innerHTML =
        `<p class="text-green-500 text-sm mt-1">
            <i class="fa-solid fa-circle-check mr-1"></i>${message}
        </p>`;
}

function clearMessage(input, element) {
    input.classList.remove("border-red-500", "border-green-500");
    element.innerHTML = "";
}

// ====================== LIVE VALIDATION ======================

// First Name
firstName.addEventListener("input", function () {

    if (this.value.trim() === "") {
        clearMessage(this, val4);
    }
    else if (!namePattern.test(this.value.trim())) {
        showError(this, val4, "Only alphabets are allowed.");
    }
    else {
        showSuccess(this, val4, "Valid Name!");
    }

});

// Last Name
lastName.addEventListener("input", function () {

    if (this.value.trim() === "") {
        clearMessage(this, val5);
    }
    else if (!namePattern.test(this.value.trim())) {
        showError(this, val5, "Only alphabets are allowed.");
    }
    else {
        showSuccess(this, val5, "Valid Name!");
    }

});

// Email
email.addEventListener("input", function () {

    if (this.value.trim() === "") {
        clearMessage(this, val1);
    }
    else if (!emailPattern.test(this.value.trim())) {
        showError(this, val1, "Enter a valid email.");
    }
    else {
        showSuccess(this, val1, "Valid Email");
    }

});

// Password
password.addEventListener("input", function () {

    if (this.value.trim() === "") {
        clearMessage(this, val2);
    }
    else if (!passwordPattern.test(this.value.trim())) {
        showError(this, val2,
            "8+ chars, uppercase, lowercase, number & special character.");
    }
    else {
        showSuccess(this, val2, "Strong Password");
    }

});

// Confirm Password
confirmPassword.addEventListener("input", function () {

    if (this.value.trim() === "") {
        clearMessage(this, val3);
    }
    else if (this.value !== password.value) {
        showError(this, val3, "Passwords do not match.");
    }
    else {
        showSuccess(this, val3, "Passwords Match");
    }

});

// ====================== FORM VALIDATION ======================

function validation() {

    if (
        !namePattern.test(firstName.value.trim()) ||
        !namePattern.test(lastName.value.trim()) ||
        !emailPattern.test(email.value.trim()) ||
        !passwordPattern.test(password.value.trim()) ||
        password.value !== confirmPassword.value
    ) {
        return false;
    }

    alert("🎉 Account Created Successfully!");

    return false; // Change to true when backend is connected.
}