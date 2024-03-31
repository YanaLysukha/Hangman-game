import Component from "../base-component";

async function getCarsAmountInGarage() {
    const url = "http://127.0.0.1:3000/garage";
    const response = await fetch(url);
    const jsonResult = await response.json();
    const totalCars = jsonResult.length;
    return totalCars;
}

export function createGarageAmountElement() {
    const garageAmountElement = new Component({
        tagName: "div",
        className: "garage-amount",
        textContent: `Garage (${getCarsAmountInGarage()})`,
    });
    return garageAmountElement;
}

export function createPageNumberGarage() {
    const pageNumberGarage = new Component({
        tagName: "div",
        className: "page-number-garage",
        textContent: "Page #1",
    });
    return pageNumberGarage;
}
