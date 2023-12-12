const randomChar = "AZERTYUIOPQSDFGHJKLMWXCVBN0123456789";
exports.generateCode = size => {
  let randomIds = [];

  for (let i = 0; i < size; i++) {
    let randomId = Math.floor(Math.random() * randomChar.length);
    randomIds.push(randomChar[randomId]);
  }

  return randomIds;
};
