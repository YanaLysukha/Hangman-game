import Component from "../base-component";
import "./button.css";

export default function createButton(
    textContent: string,
    className: string,
    // onClick: () => void,
) {
    const button = new Component({ tagName: "button", textContent, className });
    return button;
}
