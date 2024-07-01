import BaseComponent from '../base-component';
import hangmanIcon from '../../img/hangman-icon.png';
import './style.scss';

const POSITIVE_RESULT = 'Congratulations!';
const NEGATIVE_RESULT = 'Game over!';

export default class Modal extends BaseComponent {
  modalWrapper;

  modalMessage;

  modalButton;

  secretWord;

  constructor(refreshGame) {
    super({ tag: 'div', class: 'modal' });
    this.createModal(refreshGame);
    document.body.append(this.node);
  }

  createModal = (refreshGame) => {
    this.modalWrapper = new BaseComponent(
      { tag: 'div', class: 'modal__wrapper' },
      new BaseComponent({ tag: 'img', src: hangmanIcon, class: 'modal__image' }),
      new BaseComponent(
        { tag: 'div', class: 'modal__content' },
        (this.modalMessage = new BaseComponent({
          tag: 'div',
          class: 'modal__content-message',
        })),
        new BaseComponent(
          {
            tag: 'div',
            class: 'modal__content-secret-word',
            text: 'The secret word was ',
          },
          (this.secretWord = new BaseComponent({ tag: 'span', text: '' })),
        ),
        (this.modalButton = new BaseComponent({
          tag: 'button',
          class: 'modal__content-btn',
          text: 'Play again',
          onclick: () => this.close(refreshGame),
        })),
      ),
    );
  };

  showCorrectWord = (answer) => {
    this.secretWord.node.textContent = answer.toUpperCase();
  };

  showGameResultMessage = (result) => {
    const message = result === true ? POSITIVE_RESULT : NEGATIVE_RESULT;
    this.modalMessage.node.textContent = message;
  };

  openWithResult = (answer, result) => {
    this.node.append(this.modalWrapper.node);
    this.showCorrectWord(answer);
    this.showGameResultMessage(result);
  };

  close = (refreshGame) => {
    this.node.remove();
    refreshGame();
  };
}
