import { ICar } from '../../../types/interfaces';
import Component from '../../base-component';

export default class CarNameComponent extends Component {
  constructor(car: ICar) {
    super({
      tagName: 'span',
      className: 'car-name',
      textContent: car.name,
    });
  }
}
