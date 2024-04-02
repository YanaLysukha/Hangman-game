import { ICar } from "../../../types/interfaces";
import ButtonComponent from "./button";
import UpdateFormComponent from "../tools-section/update-tools";

export default class SelectButtonComponent extends ButtonComponent {
    constructor(car: ICar, updateFormComponent: UpdateFormComponent) {
        super("select-btn", "select");
        this.node.addEventListener("click", () => {
            updateFormComponent.addCarToUpdateForm(car);
        });
    }
}
