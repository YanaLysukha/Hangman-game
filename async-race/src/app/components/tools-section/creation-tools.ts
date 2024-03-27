import Component from "../base-component";
import createButton from "../button/button";
import "./tools.css";

export default function createToolsSection() {
    const createBtn = createButton("create", "create-btn");
    const createCarInput = new Component({
        tagName: "input",
        className: "car-creating-input",
        textContent: "",
    });
    createCarInput.setAttribute("type", "text");
    createCarInput.setAttribute("placeholder", "Enter the car name");
    const colorSelection = new Component({
        tagName: "input",
        className: "color-selection-input",
        textContent: "",
    });
    colorSelection.setAttribute("type", "color");
    const toolsCreationSection = new Component(
        {
            tagName: "section",
            className: "create-tools-section",
            textContent: "",
        },
        createCarInput,
        colorSelection,
        createBtn,
    );
    return toolsCreationSection;
}
