import Component from "../base-component";

export default class NameUpdateComponent extends Component<HTMLInputElement> {
    constructor() {
        super({
            tagName: "input",
            className: "update-car-input",
            textContent: "",
        });
        this.setAttribute("type", "text");
        this.setAttribute("placeholder", "Update car name");
    }

    setValue(value: string) {
        this.node.value = value;
    }
}
