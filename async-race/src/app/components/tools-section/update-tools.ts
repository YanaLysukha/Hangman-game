import Component from "../base-component";
import ButtonComponent from "../button/button";
import ColorUpdateComponent from "./color-update";
import "./tools.css";
import NameUpdateComponent from "./update-name";

export default class UpdateFormComponent extends Component {
    constructor() {
        const updateColorInput = new ColorUpdateComponent();
        const updateCarInput = new NameUpdateComponent();
        const updateBtn = new ButtonComponent("update-btn", "update");

        super(
            {
                tagName: "section",
                className: "update-tools-section",
            },
            updateCarInput,
            updateColorInput,
            updateBtn,
        );
    }
}
