function validatePassword(password: string): boolean {
    if (password.length < 8) {
        return false;
    }

    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        }
    }

    return hasUppercase && hasLowercase && hasDigit;
}

const password = "Password123";
const isValid = validatePassword(password);

if (isValid) {
    console.log("Password is valid");
} else {
    console.log("Password is invalid");
}