import "./style.css";
import createGaragePage from "./app/components/main-garage/garage-page";
import createHeader from "./app/components/header/header";
import createWinnersPage from "./app/components/main-winners/winners-content";

createHeader();
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
