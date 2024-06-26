import BaseComponent from '../base-component';

export default class Header extends BaseComponent {
  constructor() {
    super({ tag: 'header' });
    document.body.append(this.node);
    this.createContent();
  }

  createContent = () => {
    const gameTitle = new BaseComponent({ tag: 'h1', text: 'Hangman game' });
    this.node.append(gameTitle.node);
  };
}
