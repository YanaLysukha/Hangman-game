import Component from '../base-component';
import ButtonComponent from '../button/button';
import ColorUpdateComponent from './color-update';
import classes from './style.module.scss';
import NameUpdateComponent from './update-name';
import Api from '../../api';
import { ICar } from '../../types/interfaces';

export default class UpdateFormComponent extends Component {
  updateColorInput = new ColorUpdateComponent();

  updateCarInput = new NameUpdateComponent();

  updateBtn = new ButtonComponent('update-btn', 'update');

  private static instanceRef: UpdateFormComponent;

  private constructor() {
    super({
      tagName: 'section',
      className: classes.updateToolsSection,
    });
    this.append(this.updateCarInput);
    this.append(this.updateColorInput);
    this.append(this.updateBtn);
  }

  static getInstance(): UpdateFormComponent {
    if (UpdateFormComponent.instanceRef === undefined) {
      UpdateFormComponent.instanceRef = new UpdateFormComponent();
    }
    return UpdateFormComponent.instanceRef;
  }

  addCarToUpdateForm(car: ICar) {
    const textInput = this.updateCarInput.node;
    textInput.value = car.name;
    const colorInput = this.updateColorInput.node;
    colorInput.value = car.color;
    UpdateFormComponent.addListenerToUpdateBtn(
      this.updateBtn,
      this.updateCarInput,
      this.updateColorInput,
      car.id,
    );
  }

  static addListenerToUpdateBtn(
    updateBtn: Component,
    updateCarInput: Component<HTMLInputElement>,
    updateColorInput: Component<HTMLInputElement>,
    id: number,
  ) {
    updateBtn.node.addEventListener('click', async () => {
      const textInputValue = updateCarInput.node.value;
      const colorInputValue = updateColorInput.node.value;
      await Api.updateCar(id, textInputValue, colorInputValue);
    });
  }
}
