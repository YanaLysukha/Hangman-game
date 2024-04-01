import Component from "../base-component";

export default class WinnersPageComponent extends Component {
    constructor(winnerAmount: number) {
        const winnersAmountElement = new Component({
            tagName: "div",
            className: "winners-amount",
            textContent: `Winners ${winnerAmount}`,
        });
        const pageNumberWinners = new Component({
            tagName: "div",
            className: "page-number-winners",
            textContent: "Page #1",
        });
        super(
            {
                tagName: "main",
                className: "main-winners-content",
                textContent: "",
            },
            winnersAmountElement,
            pageNumberWinners,
        );
    }

    static async getWinnersAmount() {
        const url = "http://127.0.0.1:3000/winners";
        const response = await fetch(url);
        const jsonResult = await response.json();
        const totalWinners = jsonResult.length;
        return totalWinners;
    }
}
