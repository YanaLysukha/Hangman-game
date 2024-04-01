import Component from "../base-component";
import { ICar } from "../../../types/interfaces";
import { RaceComponent } from "../car-container/race-component";
import GarageAmountComponent from "./garage-amount-component";
import GaragePageNumberComponent from "./garage-page-number";

async function getCarsAmountInGarage() {
    const url = "http://127.0.0.1:3000/garage";
    const response = await fetch(url);
    const jsonResult = await response.json();
    const totalCars = jsonResult.length;
    return totalCars;
}

export async function addRaceComponent() {
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

let garageView: Component;

export async function createGarageView() {
    garageView = new Component(
        {
            tagName: "div",
            className: "garage-view",
        },
        new GarageAmountComponent(await getCarsAmountInGarage()),
        new GaragePageNumberComponent(),
        ...(await addRaceComponent()),
    );
    return garageView;
}

export function addToGarage(car: ICar) {
    const raceComponent = new RaceComponent(car);
    garageView.append(raceComponent);
}
