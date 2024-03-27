import Component from "../base-component";

export default function createGaragePage() {
    const garageAmountElement = new Component({
        tagName: "div",
        className: "garage-amount",
        textContent: "",
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

    async function getCarsAmountInGarage() {
        try {
            const url = "http://127.0.0.1:3000/garage";
            const response = await fetch(url);
            const jsonResult = await response.json();
            const totalCars = jsonResult.length;
            garageAmountElement.node.textContent = `Garage (${totalCars})`;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    getCarsAmountInGarage();

    return garageMainElement;
}
