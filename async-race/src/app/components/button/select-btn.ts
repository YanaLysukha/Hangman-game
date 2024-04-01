import UpdateFormComponent from "../tools-section/update-tools";
import ButtonComponent from "./button";
import UpdateButtonComponent from "./update-btn";
import ColorUpdateComponent from "../tools-section/color-update";
import NameUpdateComponent from "../tools-section/update-name";

export default class SelectButtonComponent extends ButtonComponent {
    constructor(id: number) {
        super("select-btn", "select");
        this.node.addEventListener("click", () => {
            UpdateFormComponent.addListenerToUpdateBtn(
                new UpdateButtonComponent(),
                new NameUpdateComponent(),
                new ColorUpdateComponent(),
                id,
            );
        });
    }
}
