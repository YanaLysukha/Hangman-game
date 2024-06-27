import BaseComponent from '../base-component';
import './style.scss';

export default class Header extends BaseComponent {
  constructor() {
    super({ tag: 'h1', text: 'Hangman game', class: 'header' });
  }
}
