import Component from "../base-component";
import createToolsSection from "../tools-section/creation-tools";
import createUpdateTools from "../tools-section/update-tools";
import { createGarageView } from "./garage-content";

export default async function createGaragePage() {
    const garageMainElement = new Component(
        {
            tagName: "main",
            className: "main-garage-content",
            textContent: "",
        },
        createToolsSection(),
        createUpdateTools(),
        await createGarageView(),
    );

    document.body.append(garageMainElement.node);

    return garageMainElement;
}
