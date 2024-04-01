import Component from "../base-component";
import "./tools.css";
import { addToGarage } from "../main-garage/garage-content";
import ButtonComponent from "../button/button";
import ColorCreationComponent from "./color-creation";

async function createCar(textInputValue: string, colorInputValue: string) {
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

export default class CreateFormComponent extends Component {
    constructor() {
        const createBtn = new ButtonComponent("create-btn", "create");
        const createCarInput = new Component<HTMLInputElement>({
            tagName: "input",
            className: "car-creating-input",
            textContent: "",
        });
        createCarInput.setAttribute("type", "text");
        createCarInput.setAttribute("placeholder", "Enter the car name");
        const colorSelection = new ColorCreationComponent();
        colorSelection.setAttribute("type", "color");

        super(
            {
                tagName: "section",
                className: "create-tools-section",
            },
            createCarInput,
            colorSelection,
            createBtn,
        );

        CreateFormComponent.addListenerToCreateBtn(
            createBtn,
            createCarInput,
            colorSelection,
        );
    }

    static addListenerToCreateBtn(
        createBtn: Component,
        createCarInput: Component<HTMLInputElement>,
        colorSelection: Component<HTMLInputElement>,
    ) {
        createBtn.node.addEventListener("click", () => {
            const textInputValue = createCarInput.node.value;
            const colorInputValue = colorSelection.node.value;
            createCar(textInputValue, colorInputValue);
        });
    }
}
