import Component from "../base-component";
import "./tools.css";
import ButtonComponent from "../button/button";
import ColorCreationComponent from "./color-creation";
import NameCreationComponent from "./name-creation";
import GarageViewComponent from "../main-garage/garage-view-component";
import Api from "../../api";
import { ICar } from "../../../types/interfaces";

export default class CreateFormComponent extends Component {
    constructor(
        garageView: GarageViewComponent,
        addCarToUpdateForm: (car: ICar) => void,
    ) {
        const createBtn = new ButtonComponent("create-btn", "create");
        const createCarInput = new NameCreationComponent();
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
            garageView,
            addCarToUpdateForm,
        );
    }

    static addListenerToCreateBtn(
        createBtn: Component,
        createCarInput: Component<HTMLInputElement>,
        colorSelection: Component<HTMLInputElement>,
        garageView: GarageViewComponent,
        addCarToUpdateForm: (car: ICar) => void,
    ) {
        createBtn.node.addEventListener("click", async () => {
            const textInputValue = createCarInput.node.value;
            const colorInputValue = colorSelection.node.value;
            const carData = await Api.createCar(
                textInputValue,
                colorInputValue,
            );
            garageView.addToGarage(carData, addCarToUpdateForm);
        });
    }
}
