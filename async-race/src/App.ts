import Api from "./api";
import Component from "./components/base-component";
import Header from "./components/header/header";
import createGaragePage from "./components/main-garage/garage-page";
import WinnersPageComponent from "./components/main-winners/winners-content";

export default class App {
    constructor() {
        this.currentPage = null;
    }

    currentPage: Component | null;

    async start() {
        const header = new Header();
        document.body.append(header.node);
        this.currentPage = await createGaragePage();

        this.addToGarageListener();
        this.addToWinnersListener();
    }

    addToGarageListener() {
        const toGarageBtn = document.querySelector(".garage-btn");
        toGarageBtn?.addEventListener("click", async () => {
            this.currentPage?.destroy();
            this.currentPage = await createGaragePage();
        });
    }

    addToWinnersListener() {
        const toWinnersBtn = document.querySelector(".winners-btn");
        toWinnersBtn?.addEventListener("click", async () => {
            this.currentPage?.destroy();
            this.currentPage = new WinnersPageComponent(
                await Api.getWinnersAmount(),
            );
            document.body.append(this.currentPage.node);
        });
    }
}
