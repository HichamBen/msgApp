const emailjs = require("@emailjs/nodejs");

exports.sendEmail = async templateParams => {
  try {
    const response = await emailjs.send(
      process.env.YOUR_SERVICE_ID,
      process.env.YOUR_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.YOUR_PUBLIC_KEY,
        privateKey: process.env.YOUR_PRIVATE_KEY, // optional, highly recommended for security reasons
      }
    );

    return undefined
  } catch (error) {
    return error;
  }
};
