const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameReg = /^[a-zA-Z ]{3,12}$/i;

exports.validPassword = pwd => {
  let message = null;
  let isValid = false;
  if (pwd.length < 8 || pwd.includes(" ")) {
    message =
      "The password length must be greater than or equal 8, and not contains spaces!";
  } else {
    isValid = true;
  }

  return [message, isValid];
};

exports.validEmail = email => {
  let message = null;
  let isValid = false;

  if (!email.match(emailReg)) {
    message = `${email.toLowerCase()} is not a valid email!`;
  } else {
    isValid = true;
  }

  return [message, isValid];
};

exports.validName = name => {
  let message = null;
  let isValid = false;

  name = name.trim();

  if (!name.match(nameReg)) {
    message = `${name} isn't valid name, must contain alphabetical characters and length from 3 to 12.`;
  } else {
    isValid = true;
  }

  return [message, isValid];
};
