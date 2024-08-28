import Component from '../base-component';
import './button.css';

export default class ButtonComponent extends Component {
  constructor(className: string, textContent: string) {
    super({ tagName: 'button', className, textContent });
  }
}
