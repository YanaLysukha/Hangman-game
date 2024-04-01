import Component from "../base-component";
import GarageAmountComponent from "./garage-amount-component";
import GaragePageNumberComponent from "./garage-page-number";
import { RaceComponent } from "../car-container/race-component";
import { ICar } from "../../../types/interfaces";

async function addRaceComponent() {
    async function getCars(): Promise<ICar[]> {
        const url = "http://127.0.0.1:3000/garage";
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    }
    const cars = await getCars();
    const raceComponents = cars.map((car) => new RaceComponent(car));
    return raceComponents;
}

async function getCarsAmountInGarage() {
    const url = "http://127.0.0.1:3000/garage";
    const response = await fetch(url);
    const jsonResult = await response.json();
    const totalCars = jsonResult.length;
    return totalCars;
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
            new GarageAmountComponent(await getCarsAmountInGarage()),
            new GaragePageNumberComponent(),
            ...(await addRaceComponent()),
        ]);
    }

    addToGarage(car: ICar) {
        const raceComponent = new RaceComponent(car);
        this.append(raceComponent);
    }
}
