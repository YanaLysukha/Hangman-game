import BaseComponent from '../base-component';
import gallowsImg from '../../img/hangman-0.svg';

export default class Gallows extends BaseComponent {
  gallowsImage;

  constructor() {
    super({ tag: 'section', class: 'gallows-side' });
    this.createGallowsComponent();
  }

  createGallowsComponent = () => {
    const gallowsWrapper = new BaseComponent({ tag: 'div' },
      (this.gallowsImage = new BaseComponent({ tag: 'img', src: gallowsImg, alt: 'Gallows image' })),
      new BaseComponent({ tag: 'h1', class: 'gallows-side__title', text: 'Hangman game' }),
    )
    this.node.append(gallowsWrapper.node);
  };

  showNextBodyPart = (attempt) => {
    this.gallowsImage.node.src = `img/hangman-${attempt}.svg`;
  }
}
