import BaseComponent from '../base-component';
import getRandomNumber from '../../utils';
import Gallows from '../gallows';
import Keyboard from '../keyboard';
import Quiz from '../quiz';
import questions from '../../questions';
import '../../css/style.css';
import Modal from '../modal';
import Counter from '../../state';

export default class Game extends BaseComponent {
  question;

  randomNumber;

  lettersCount;

  modal;

  quiz;

  gallows;

  keyboard;

  constructor() {
    super({ tag: 'div', class: 'game-wrapper' });
    document.body.append(this.node);
  }

  renderGameContent = () => {
    this.gallows = new Gallows();
    this.node.append(this.gallows.node);
    const quizSection = new BaseComponent(
      { tag: 'section', class: 'quiz-side' },
      (this.quiz = new Quiz(this.lettersCount, this.question)),
      (this.keyboard = new Keyboard(this.checkLetter)),
    );
    this.node.append(quizSection.node);
  };

  setParametersBasedOnRandom = () => {
    this.randomNumber = getRandomNumber(0, questions.length, 0);
    this.question = questions[this.randomNumber].question;
    this.lettersCount = questions[this.randomNumber].answer.length;
  };

  checkLetter = (letter) => {
    const { answer } = questions[this.randomNumber];
    console.log(answer);
    if (answer.toLowerCase().includes(letter)) {
      this.quiz.addCorrectLetter(answer, letter);
    } else {
      this.quiz.increaseCounter();
      this.gallows.showNextBodyPart(this.quiz.counter);
    }
    this.checkResult(answer);
  };

  checkResult = (answer) => {
    if (this.quiz.counter === 6) {
      this.modal = new Modal(this.refreshGame);
      this.modal.openWithResult(answer, false);
      return;
    }
    const enteredWord = this.quiz.getEnteredWord();
    if (answer.toLowerCase() === enteredWord) {
      this.modal = new Modal(this.refreshGame);
      this.modal.openWithResult(answer, true);
    }
  };

  refreshGame = () => {
    this.quiz.counter = 0;
    this.node.remove();
    const newGame = new Game();
    newGame.start();
  };

  start = () => {
    this.setParametersBasedOnRandom();
    this.renderGameContent();
  };
}
