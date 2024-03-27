import Component from "../base-component";
import createPageContainer from "../page-container/page-container";

export default function createGaragePage() {
    console.log("lalalala");
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

    const pageContainer = createPageContainer();
    pageContainer.append(garageMainElement);

    garageMainElement.append(garageAmountElement);
    garageMainElement.append(pageNumberGarage);

    return garageMainElement;
}
