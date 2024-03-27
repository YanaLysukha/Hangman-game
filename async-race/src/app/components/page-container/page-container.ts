import Component from "../base-component";
import createHeader from "../header/header";
import "./page-container.css";

export default function createPageContainer() {
    const pageContainer = new Component({
        tagName: "div",
        className: "page-container",
        textContent: "",
    });
    const header = createHeader();
    pageContainer.append(header);
    document.body.append(pageContainer.node);
    return pageContainer;
}
