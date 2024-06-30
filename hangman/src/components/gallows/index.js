import BaseComponent from '../base-component';
import gallowsImg from '../../img/hangman-0.svg';
import './style.scss';

export default class Gallows extends BaseComponent {
  gallowsImage;

  constructor() {
    super({ tag: 'section', class: 'gallows-side' });
    this.createGallowsComponent();
  }

  createGallowsComponent = () => {
    const gallowsWrapper = new BaseComponent(
      { tag: 'div', class: 'gallows-side-wrapper' },
      (this.title = new BaseComponent({
        tag: 'h2',
        text: 'HANGMAN GAME',
        class: 'gallows-side__title',
      })),
      (this.gallowsImage = new BaseComponent({
        tag: 'img',
        src: gallowsImg,
        alt: 'Gallows image',
        class: 'gallows-side__img',
      })),
    );
    this.node.append(gallowsWrapper.node);
  };

  showNextBodyPart = (attempt) => {
    this.gallowsImage.node.src = `img/hangman-${attempt}.svg`;
  };
}
