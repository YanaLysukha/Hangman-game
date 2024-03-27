import "./style.css";
import createGaragePage from "./app/components/main-garage/garage-content";
import createHeader from "./app/components/header/header";
import createWinnersPage from "./app/components/main-winners/winners-content";

createHeader();
addToGarageListener();
addToWinnersListener();

let currentPage = createGaragePage();

export function addToGarageListener() {
    const toGarageBtn = document.querySelector(".garage-btn");
    toGarageBtn.addEventListener("click", () => {
        currentPage.destroy();
        currentPage = createGaragePage();
    });
}

export function addToWinnersListener() {
    const toWinnersBtn = document.querySelector(".winners-btn");
    toWinnersBtn.addEventListener("click", () => {
        currentPage.destroy();
        currentPage = createWinnersPage();
    });
}
