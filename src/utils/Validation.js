export const isValidName = name => {
  let pattern = new RegExp(/^[a-zA-Z ]+$/);
  return pattern.test(name);
};

export const isValidPhone = phone => {
  let pattern = new RegExp(/^[0-9]{10,15}$/);
  return pattern.test(phone);
};

export const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = phoneNumber => {
  const phoneRegex = /^\+?[0-9\s-()]+$/;
  return phoneRegex.test(phoneNumber);
};

export const isValidPassword = p => {
  const passWordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.)/;
  return passWordRegex.test(p);
};

function password_validate(p) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.)/.test(p);
}
