import BaseComponent from '../base-component';

export default class Header extends BaseComponent {
  constructor() {
    super({ tag: 'h1', text: 'Hangman' });
  }
}
