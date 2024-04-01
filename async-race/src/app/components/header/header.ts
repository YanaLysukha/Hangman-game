import "./header.css";
import Component from "../base-component";
import createButton from "../button/button";

export default class Header extends Component {
    constructor() {
        const garageButton = createButton("To garage", "garage-btn");
        const winnersButton = createButton("To winners", "winners-btn");

        super(
            { tagName: "header", className: "header" },
            garageButton,
            winnersButton,
        );
    }
}
