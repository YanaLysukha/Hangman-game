export default getRandomNumber = (min, max, previous) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  while (randomNumber === previous) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  }
};
