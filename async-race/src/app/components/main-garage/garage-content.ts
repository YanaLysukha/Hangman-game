import Component from "../base-component";
import createToolsSection from "../tools-section/creation-tools";
import createUpdateTools from "../tools-section/update-tools";

export default function createGaragePage() {
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
