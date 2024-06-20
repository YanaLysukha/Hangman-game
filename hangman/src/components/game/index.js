import BaseComponent from '../base-component';
import getRandomNumber from '../../utils';
import Gallows from '../gallows';
import Keyboard from '../keyboard';
import Quiz from '../quiz';
import questions from '../../questions';
import '../../css/style.css';
// import Modal from '../modal';

export default class Game extends BaseComponent {
  question;

  randomNumber;

  lettersCount;

  modal;

  quiz;

  constructor() {
    super({ tag: 'div', class: 'game-wrapper' });
    document.body.append(this.node);
  }

  renderGameContent = () => {
    const gallowsSection = new Gallows();
    this.node.append(gallowsSection.node);
    const quizSection = new BaseComponent(
      { tag: 'section', class: 'quiz-side' },
      (this.quiz = new Quiz(this.lettersCount, this.question)),
      new Keyboard(this.checkLetter),
    );
    this.node.append(quizSection.node);
  };

  setParametersBasedOnRandom = () => {
    this.randomNumber = getRandomNumber(1, questions.length, 0);
    this.question = questions[this.randomNumber].question;
    this.lettersCount = questions[this.randomNumber].answer.length;
  };

  checkLetter = (letter) => {
    const { answer } = questions[this.randomNumber];
    if (answer.toLowerCase().includes(letter)) {
      console.log('correct');
    } else {
      this.quiz.increaseCounter();
    }
  };

  start = () => {
    this.setParametersBasedOnRandom();
    this.renderGameContent();
  };
}
