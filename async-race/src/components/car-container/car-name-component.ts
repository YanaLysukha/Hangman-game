import Component from "../base-component";
import { ICar } from "../../types/interfaces";

export default class CarNameComponent extends Component {
    constructor(car: ICar) {
        super({
            tagName: "span",
            className: "car-name",
            textContent: car.name,
        });
    }
}
