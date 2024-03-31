import Component from "../base-component";
import createToolsSection from "../tools-section/creation-tools";
import createUpdateTools from "../tools-section/update-tools";
import createRaceComponent from "../car-container/race-component";
import { ICar } from "../../../types/interfaces";

export default async function createGaragePage() {
    const garageAmountElement = new Component({
        tagName: "div",
        className: "garage-amount",
        textContent: "",
    });
    const pageNumberGarage = new Component({
        tagName: "div",
        className: "page-number-garage",
        textContent: "Page #1",
    });
    async function getCars(): Promise<ICar[]> {
        const url = "http://127.0.0.1:3000/garage";
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    }
    const cars = await getCars();
    const raceComponent = cars.map((car) => createRaceComponent(car));
    const garageMainElement = new Component(
        {
            tagName: "main",
            className: "main-garage-content",
            textContent: "",
        },
        createToolsSection(),
        createUpdateTools(),
        garageAmountElement,
        pageNumberGarage,
        ...raceComponent,
    );

    document.body.append(garageMainElement.node);

    async function getCarsAmountInGarage() {
        const url = "http://127.0.0.1:3000/garage";
        const response = await fetch(url);
        const jsonResult = await response.json();
        const totalCars = jsonResult.length;
        garageAmountElement.node.textContent = `Garage (${totalCars})`;
        return totalCars;
    }
    getCarsAmountInGarage();

    return garageMainElement;
}
