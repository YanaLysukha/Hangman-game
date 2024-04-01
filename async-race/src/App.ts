import Header from "./app/components/header/header";
import createGaragePage from "./app/components/main-garage/garage-page";
import WinnersPageComponent from "./app/components/main-winners/winners-content";
import Component from "./app/components/base-component";

export class App {
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
                await WinnersPageComponent.getWinnersAmount()
            );
            document.body.append(this.currentPage.node);
        });
    }
}
