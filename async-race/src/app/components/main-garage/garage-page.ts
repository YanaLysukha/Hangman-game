import { ICar } from "../../../types/interfaces";
import Component from "../base-component";
import CreateFormComponent from "../tools-section/creation-tools";
import UpdateFormComponent from "../tools-section/update-tools";
import GarageViewComponent from "./garage-view-component";

export default async function createGaragePage() {
    const updateFormComponent = new UpdateFormComponent();
    function addCarToUpdateForm(car: ICar) {
        const inputValue = car.name;
        (updateFormComponent.children[0].node as HTMLInputElement).value =
            inputValue;
        (updateFormComponent.children[1].node as HTMLInputElement).value =
            car.color;
    }

    const garageView: GarageViewComponent = new GarageViewComponent();
    await garageView.initialize(addCarToUpdateForm);
    const garageMainElement = new Component(
        {
            tagName: "main",
            className: "main-garage-content",
            textContent: "",
        },
        new CreateFormComponent(garageView, addCarToUpdateForm),
        updateFormComponent,
        garageView,
    );

    document.body.append(garageMainElement.node);

    return garageMainElement;
}
