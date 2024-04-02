import Component from "../base-component";
import CreateFormComponent from "../tools-section/creation-tools";
import UpdateFormComponent from "../tools-section/update-tools";
import GarageViewComponent from "./garage-view-component";

export default async function createGaragePage() {
    const updateFormComponent = new UpdateFormComponent();

    const garageView: GarageViewComponent = new GarageViewComponent();
    await garageView.initialize(updateFormComponent);
    const garageMainElement = new Component(
        {
            tagName: "main",
            className: "main-garage-content",
            textContent: "",
        },
        new CreateFormComponent(garageView, updateFormComponent),
        updateFormComponent,
        garageView,
    );

    document.body.append(garageMainElement.node);

    return garageMainElement;
}
