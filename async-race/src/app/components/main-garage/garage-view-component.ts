import Component from "../base-component";
import GarageAmountComponent from "./garage-amount-component";
import GaragePageNumberComponent from "./garage-page-number";
import { RaceComponent } from "../car-container/race-component";
import { ICar } from "../../../types/interfaces";
import Api from "../../api";
import UpdateFormComponent from "../tools-section/update-tools";

async function addRaceComponent(updateFormComponent: UpdateFormComponent) {
    const cars = await Api.getCars();
    const raceComponents = cars.map(
        (car) => new RaceComponent(car, updateFormComponent),
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

    async initialize(updateFormComponent: UpdateFormComponent) {
        this.appendChildren([
            new GarageAmountComponent(await Api.getCarsAmountInGarage()),
            new GaragePageNumberComponent(),
            ...(await addRaceComponent(updateFormComponent)),
        ]);
    }

    addToGarage(car: ICar, updateFormComponent: UpdateFormComponent) {
        const raceComponent = new RaceComponent(car, updateFormComponent);
        this.append(raceComponent);
    }
}
