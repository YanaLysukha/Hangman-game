import { ICar } from "../../../types/interfaces";
import Component from "../base-component";
import SelectButtonComponent from "../button/select-btn";
import RemoveButtonComponent from "../button/remove-btn";
import CarNameComponent from "./car-name-component";
import UpdateFormComponent from "../tools-section/update-tools";

export default class BtnNameContainer extends Component {
    constructor(
        car: ICar,
        removeCar: Component,
        updateFormComponent: UpdateFormComponent,
    ) {
        const selectBtn = new SelectButtonComponent(car, updateFormComponent);
        const removeBtn = new RemoveButtonComponent(car.id, removeCar);
        const carNameElement = new CarNameComponent(car);
        super(
            {
                tagName: "div",
                className: "btn-and-name-container",
            },
            selectBtn,
            removeBtn,
            carNameElement,
        );
    }
}
