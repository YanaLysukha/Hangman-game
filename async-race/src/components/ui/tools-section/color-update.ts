import Component from '../../base-component';

export default class ColorUpdateComponent extends Component<HTMLInputElement> {
  constructor() {
    super({
      tagName: 'input',
      className: 'update-color-input',
      textContent: '',
    });
    this.setAttribute('type', 'color');
  }
}
