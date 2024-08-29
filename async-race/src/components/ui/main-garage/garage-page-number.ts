import Component from '../../base-component';

export default class GaragePageNumberComponent extends Component {
  constructor() {
    super({
      tagName: 'div',
      className: 'page-number-garage',
      textContent: 'Page #1',
    });
  }
}
