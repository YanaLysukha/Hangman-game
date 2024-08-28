import Component from '../base-component';

export default class FlagImageComponent extends Component {
  constructor() {
    super({
      tagName: 'img',
      className: 'flag-img',
    });
    this.setAttribute('src', './img/finish-flag.svg');
    this.setAttribute('alt', 'flag image');
  }
}
