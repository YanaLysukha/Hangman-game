import "./header.css";
import Component from "../base-component";
import ButtonComponent from "../button/button";

export default class Header extends Component {
    constructor() {
        const garageButton = new ButtonComponent("garage-btn", "To garage");
        const winnersButton = new ButtonComponent("winners-btn", "To winners");

        super(
            { tagName: "header", className: "header" },
            garageButton,
            winnersButton,
        );
    }
}
