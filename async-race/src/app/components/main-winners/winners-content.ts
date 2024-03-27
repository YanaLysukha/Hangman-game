import Component from "../base-component";

export default function createWinnersPage() {
    console.log("winners");

    const winnersAmountElement = new Component({
        tagName: "div",
        className: "winners-amount",
        textContent: "Winners",
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

    return winnersMainElement;
}
