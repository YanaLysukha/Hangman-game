import Component from "../base-component";
import createButton from "../button/button";
import "./tools.css";

export default function createUpdateTools() {
    const updateColorInput = new Component({
        tagName: "input",
        className: "update-color-input",
        textContent: "",
    });
    updateColorInput.setAttribute("type", "color");
    const updateCarInput = new Component({
        tagName: "input",
        className: "update-car-input",
        textContent: "",
    });
    updateCarInput.setAttribute("type", "text");
    updateCarInput.setAttribute("placeholder", "Update car name");
    const updateBtn = createButton("update", "update-btn");
    const updateTools = new Component(
        {
            tagName: "section",
            className: "update-tools-section",
            textContent: "",
        },
        updateCarInput,
        updateColorInput,
        updateBtn,
    );
    return updateTools;
}
