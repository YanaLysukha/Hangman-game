import Component from "../base-component";

export default class GarageAmountComponent extends Component {
    constructor(garageAmount: number) {
        super({
            tagName: "div",
            className: "garage-amount",
            textContent: `Garage (${garageAmount})`,
        });
    }

    static async getCarsAmountInGarage() {
        const url = "http://127.0.0.1:3000/garage";
        const response = await fetch(url);
        const jsonResult = await response.json();
        const totalCars = jsonResult.length;
        return totalCars;
    }
}
