import Component from "../base-component";

export default class GarageAmountComponent extends Component {
    constructor(garageAmount: number) {
        super({
            tagName: "div",
            className: "garage-amount",
            textContent: `Garage (${garageAmount})`,
        });
    }
}
