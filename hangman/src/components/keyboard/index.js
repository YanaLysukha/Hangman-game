import BaseComponent from '../base-component';
import './style.module.scss';

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
  result;

  constructor(checkLetter) {
    super({ tag: 'ul', class: 'quiz-side__keyboard' });
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

  addOnKeyListener = (checkLetter) => {
    document.addEventListener('keydown', (event) => {
      const currentLetter = event.key.toLowerCase();
      checkLetter(currentLetter);
      // temporary
      this.result = 0;
    });
  };

  addOnClickListener = (checkLetter) => {
    this.node.addEventListener('click', (event) => {
      const li = event.target.closest('li');
      if (!li) return;
      li.style.background = 'red';
      checkLetter(li.text.toLowerCase());
    });
  };
}
