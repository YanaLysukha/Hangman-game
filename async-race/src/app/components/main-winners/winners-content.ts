import Component from "../base-component";

export default function createWinnersPage() {
    const winnersAmountElement = new Component({
        tagName: "div",
        className: "winners-amount",
        textContent: "",
    });
    const pageNumberWinners = new Component({
        tagName: "div",
        className: "page-number-winners",
        textContent: "Page",
    });
    const winnersMainElement = new Component(
        {
            tagName: "main",
            className: "main-winners-content",
            textContent: "",
        },
        winnersAmountElement,
        pageNumberWinners,
    );
    document.body.append(winnersMainElement.node);

    async function getWinnersAmount() {
        try {
            const url = "http://127.0.0.1:3000/winners";
            const response = await fetch(url);
            const jsonResult = await response.json();
            const totalWinners = jsonResult.length;
            winnersAmountElement.node.textContent = `Winners (${totalWinners})`;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    getWinnersAmount();

    return winnersMainElement;
}
