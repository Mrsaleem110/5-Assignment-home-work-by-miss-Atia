function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }
    var hasUppercase = false;
    var hasLowercase = false;
    var hasDigit = false;
    for (var _i = 0, password_1 = password; _i < password_1.length; _i++) {
        var char = password_1[_i];
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }
        else if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        }
        else if (char >= '0' && char <= '9') {
            hasDigit = true;
        }
    }
    return hasUppercase && hasLowercase && hasDigit;
}
var password = "Password123";
var isValid = validatePassword(password);
if (isValid) {
    console.log("Password is valid");
}
else {
    console.log("Password is invalid");
}
