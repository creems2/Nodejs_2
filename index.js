function generatePassword(length = 12, options = {}) {
    const { numbers = true, symbols = true, uppercase = true, lowercase = true } = options;
    
    let chars = "";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars.length) {
        throw new Error("At least one character set must be enabled");
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
}

module.exports = { generatePassword };
