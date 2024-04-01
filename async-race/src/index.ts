import "./style.css";
import Header from "./app/components/header/header";
import createGaragePage from "./app/components/main-garage/garage-page";
import createWinnersPage from "./app/components/main-winners/winners-content";

const header = new Header();
document.body.append(header.node);

let currentPage = await createGaragePage();
addToGarageListener();
addToWinnersListener();

export async function addToGarageListener() {
    const toGarageBtn = document.querySelector(".garage-btn");
    toGarageBtn?.addEventListener("click", async () => {
        currentPage.destroy();
        currentPage = await createGaragePage();
    });
}

export function addToWinnersListener() {
    const toWinnersBtn = document.querySelector(".winners-btn");
    toWinnersBtn?.addEventListener("click", () => {
        currentPage.destroy();
        currentPage = createWinnersPage();
    });
}
