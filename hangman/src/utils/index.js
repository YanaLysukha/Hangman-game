const getRandomNumber = (min, max, previous) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  while (randomNumber === previous) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return randomNumber - 1;
};

export default getRandomNumber;
