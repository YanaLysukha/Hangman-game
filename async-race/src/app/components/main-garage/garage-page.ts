import Component from "../base-component";
import createToolsSection from "../tools-section/creation-tools";
import createUpdateTools from "../tools-section/update-tools";
import createRaceComponent from "../car-container/race-component";
import { ICar } from "../../../types/interfaces";
import {
    createGarageAmountElement,
    createPageNumberGarage,
} from "./garage-content";

export let garageMainElement;

export default async function createGaragePage() {
    async function getCars(): Promise<ICar[]> {
        const url = "http://127.0.0.1:3000/garage";
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    }
    const cars = await getCars();
    const raceComponent = cars.map((car) => createRaceComponent(car));
    garageMainElement = new Component(
        {
            tagName: "main",
            className: "main-garage-content",
            textContent: "",
        },
        createToolsSection(),
        createUpdateTools(),
        createGarageAmountElement(),
        createPageNumberGarage(),
        ...raceComponent,
    );

    document.body.append(garageMainElement.node);

    return garageMainElement;
}
