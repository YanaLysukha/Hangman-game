import Component from "../base-component";
import createButton from "../button/button";
import "./race-component.css";

export default function createRaceComponent() {
    const selectBtn = createButton("select", "select-btn");
    const removeBtn = createButton("remove", "remove-btn");
    const carNameElement = new Component({
        tagName: "span",
        className: "car-name",
        textContent: "",
    });
    const btnAndNameContainer = new Component(
        {
            tagName: "div",
            className: "btn-and-name-container",
            textContent: "",
        },
        selectBtn,
        removeBtn,
        carNameElement,
    );
    const carImg = new Component({
        tagName: "img",
        className: "car-img",
        textContent: "",
    });
    carImg.setAttribute("src", "./img/car-icon.svg");
    carImg.setAttribute("alt", "car image");
    const carContainer = new Component(
        { tagName: "div", className: "car-container", textContent: "" },
        carImg,
    );
    const flagImg = new Component({
        tagName: "img",
        className: "flag-img",
        textContent: "",
    });
    flagImg.setAttribute("src", "./img/finish-flag.svg");
    flagImg.setAttribute("alt", "flag image");
    const raceContainer = new Component(
        { tagName: "div", className: "race-container", textContent: "" },
        btnAndNameContainer,
        carContainer,
        flagImg,
    );
    return raceContainer;
}
