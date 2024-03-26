import Component from "../base-component";

export default function createWinnersContent() {
    const winnersMainElement = new Component({ tagName: "main", className: "main-winners-content", textContent: "" });
    const winnersAmountElement = new Component({ tagName: "div", className: "winners-amount", textContent: "Winners" });
    const pageNumberWinners = new Component({ tagName: "div", className: "page-number-winners", textContent: "Page" });

    winnersMainElement.append(winnersAmountElement);
    winnersMainElement.append(pageNumberWinners);

    return createWinnersContent;
}
