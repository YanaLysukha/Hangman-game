import Component from "../base-component";

export default function createGaragePage() {
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
    const garageMainElement = new Component(
        {
            tagName: "main",
            className: "main-garage-content",
            textContent: "",
        },
        garageAmountElement,
        pageNumberGarage,
    );

    document.body.append(garageMainElement.node);

    return garageMainElement;
}
