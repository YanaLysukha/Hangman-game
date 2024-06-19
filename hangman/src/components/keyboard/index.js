import BaseComponent from '../base-component';

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
  keyboardElement;

  constructor() {
    super({ tag: 'div', class: 'quiz-side__keyboard' });
  }

  createKeyboardElements = () => {
    letters.forEach((letter) => {
      this.keyboardElement = new BaseComponent({
        tag: 'div',
        class: 'quiz-side__keyboard-letter',
        text: letter,
      });
      this.node.append(this.keyboardElement);
    });
  };

  disable = () => {
    this.keyboardElement.node.disable = true;
  }

  enable = () => {
    this.keyboardElement.node.disable = false;
  }
}
