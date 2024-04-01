import Component from "../base-component";
import GarageAmountComponent from "./garage-amount-component";
import GaragePageNumberComponent from "./garage-page-number";
import { RaceComponent } from "../car-container/race-component";
import { ICar } from "../../../types/interfaces";
import Api from "../../api";

async function addRaceComponent() {
    const cars = await Api.getCars();
    const raceComponents = cars.map((car) => new RaceComponent(car));
    return raceComponents;
}

export default class GarageViewComponent extends Component {
    constructor() {
        super({
            tagName: "div",
            className: "garage-view",
        });
    }

    async initialize() {
        this.appendChildren([
            new GarageAmountComponent(await Api.getCarsAmountInGarage()),
            new GaragePageNumberComponent(),
            ...(await addRaceComponent()),
        ]);
    }

    addToGarage(car: ICar) {
        const raceComponent = new RaceComponent(car);
        this.append(raceComponent);
    }
}
