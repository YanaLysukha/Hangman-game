import Component from "../base-component";
import createButton from "../button/button";
import "./tools.css";
import { addToGarage } from "../main-garage/garage-content";

async function createCar(textInputValue, colorInputValue) {
    const url = "http://127.0.0.1:3000/garage";
    const data = {
        name: textInputValue,
        color: colorInputValue,
    };
    const requestOptions = {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    };
    const response = await fetch(url, requestOptions);
    const json = await response.json();
    addToGarage(json);
}

function addListenerToCreateBtn(createBtn, createCarInput, colorSelection) {
    createBtn.node.addEventListener("click", () => {
        const textInputValue = createCarInput.node.nodeValue;
        const colorInputValue = colorSelection.node.nodeValue;
        createCar(textInputValue, colorInputValue);
    });
}

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
    addListenerToCreateBtn(createBtn, createCarInput, colorSelection);
    // createBtn.node.addEventListener("click", () => {
    //     const textInputValue = createCarInput.node.nodeValue;
    //     const colorInputValue = colorSelection.node.nodeValue;

    // });
    return toolsCreationSection;
}
