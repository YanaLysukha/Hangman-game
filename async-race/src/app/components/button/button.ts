import Component from "../base-component";
import "./button.css";

export default function createButton(textContent: string, className: string) {
    const button = new Component({ tagName: "button", className, textContent });
    return button;
}
