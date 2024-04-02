import Component from "../base-component";
import GarageAmountComponent from "./garage-amount-component";
import GaragePageNumberComponent from "./garage-page-number";
import { RaceComponent } from "../car-container/race-component";
import { ICar } from "../../../types/interfaces";
import Api from "../../api";

async function addRaceComponent(addCarToUpdateForm: (car: ICar) => void) {
    const cars = await Api.getCars();
    const raceComponents = cars.map(
        (car) => new RaceComponent(car, addCarToUpdateForm),
    );
    return raceComponents;
}

export default class GarageViewComponent extends Component {
    constructor() {
        super({
            tagName: "div",
            className: "garage-view",
        });
    }

    async initialize(addCarToUpdateForm: (car: ICar) => void) {
        this.appendChildren([
            new GarageAmountComponent(await Api.getCarsAmountInGarage()),
            new GaragePageNumberComponent(),
            ...(await addRaceComponent(addCarToUpdateForm)),
        ]);
    }

    addToGarage(car: ICar, addCarToUpdateForm: (car: ICar) => void) {
        const raceComponent = new RaceComponent(car, addCarToUpdateForm);
        this.append(raceComponent);
    }
}
