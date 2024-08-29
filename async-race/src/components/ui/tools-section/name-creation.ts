import Component from '../../base-component';

export default class NameCreationComponent extends Component<HTMLInputElement> {
  constructor() {
    super({
      tagName: 'input',
      className: 'car-creating-input',
      textContent: '',
    });
  }
}
