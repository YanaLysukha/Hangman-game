import Counter from '../../state';
import BaseComponent from '../base-component';
import './style.scss';

const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export default class Keyboard extends BaseComponent {
  constructor(checkLetter) {
    super({ tag: 'ul', class: 'quiz-side__keyboard' });
    this.counter = Counter.getInstance();
    this.boundEventHandler = null;
    this.createKeyboardElements();
    this.addOnClickListener(checkLetter);
    this.addOnKeyListener(checkLetter);
  }

  createKeyboardElements = () => {
    letters.forEach((letter) => {
      const keyboardElement = new BaseComponent({
        tag: 'li',
        class: 'quiz-side__keyboard-letter',
        text: letter,
      });
      this.node.append(keyboardElement.node);
    });
  };

  handleKeyDown = (event, checkLetter) => {
    const currentLetter = event.key.toLowerCase();
    checkLetter(currentLetter);
    if (this.counter.count === 6) {
      this.removeKeyListener();
    }
  };

  addOnKeyListener(checkLetter) {
    this.boundEventHandler = (event) => this.handleKeyDown(event, checkLetter);
    document.addEventListener('keydown', this.boundEventHandler);
  }

  removeKeyListener() {
    if (this.boundEventHandler) {
      document.removeEventListener('keydown', this.boundEventHandler);
      this.boundEventHandler = null;
    }
  }

  addOnClickListener = (checkLetter) => {
    this.node.addEventListener('click', (event) => {
      const li = event.target.closest('li');
      if (!li) return;
      li.classList.add('disabled');
      checkLetter(li.text.toLowerCase());
    });
  };
}
