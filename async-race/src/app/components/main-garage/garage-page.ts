import Component from "../base-component";
import CreateFormComponent from "../tools-section/creation-tools";
import UpdateFormComponent from "../tools-section/update-tools";
import { createGarageView } from "./garage-content";

export default async function createGaragePage() {
    const garageMainElement = new Component(
        {
            tagName: "main",
            className: "main-garage-content",
            textContent: "",
        },
        new CreateFormComponent(),
        new UpdateFormComponent(),
        await createGarageView(),
    );

    document.body.append(garageMainElement.node);

    return garageMainElement;
}
