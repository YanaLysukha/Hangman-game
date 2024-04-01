import Component from "../base-component";

export default class ColorCreationComponent extends Component<HTMLInputElement> {
    constructor() {
        super({
            tagName: "input",
            className: "color-selection-input",
        });
    }
}
