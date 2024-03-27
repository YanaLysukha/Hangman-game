import Component from "../base-component";

export default function createGaragePage() {
    const garageMainElement = new Component({
        tagName: "main",
        className: "main-garage-content",
        textContent: "",
    });
    const garageAmountElement = new Component({
        tagName: "div",
        className: "garage-amount",
        textContent: "Garage",
    });
    const pageNumberGarage = new Component({
        tagName: "div",
        className: "page-number-garage",
        textContent: "Page",
    });

    document.body.append(garageMainElement.node);

    garageMainElement.append(garageAmountElement);
    garageMainElement.append(pageNumberGarage);

    return garageMainElement;
}
