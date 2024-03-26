import "./header.css";
import { Component } from "../base-component";
import createButton from "../button/button";

export default function createHeader() {
    const header = new Component({ tagName: 'header', className: 'header' });
    const garageButton = createButton('To garage', 'garage-btn');
    const winnersButton = createButton('To winners', 'winners-btn');
    header.append(garageButton);
    header.append(winnersButton);
    return header;
}
