import { ICar } from "../../../types/interfaces";
import ButtonComponent from "./button";

export default class SelectButtonComponent extends ButtonComponent {
    constructor(car: ICar, addCarToUpdateForm: (arg: ICar) => void) {
        super("select-btn", "select");
        this.node.addEventListener("click", () => {
            addCarToUpdateForm(car);
        });
    }
}
