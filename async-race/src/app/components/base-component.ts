import { IComponent } from "../../types/interfaces";

export default class Component<T extends HTMLElement = HTMLElement> {
    children: Array<Component<T | HTMLElement>> = [];

    node: T;

    constructor(
        { tagName = "div", className = "", textContent = "" }: IComponent,
        ...children: Array<Component<T | HTMLElement>>
    ) {
        const node = document.createElement(tagName) as T;
        node.textContent = textContent;
        node.className = className;
        this.node = node;

        if (children) {
            this.appendChildren(children);
        }
    }

    append(child: Component<T | HTMLElement>) {
        this.children.push(child);
        this.node.append(child.getNode());
    }

    appendChildren(children: Array<Component<T | HTMLElement>>) {
        children.forEach((el) => this.append(el));
    }

    getNode() {
        return this.node;
    }

    setTextContent(content: string) {
        this.node.textContent = content;
    }

    addClass(className: string) {
        this.node.classList.add(className);
    }

    removeClass(className: string) {
        this.node.classList.remove(className);
    }

    toggleClass(className: string) {
        this.node.classList.toggle(className);
    }

    setAttribute(attribute: string, value: string) {
        this.node.setAttribute(attribute, value);
    }

    getAttribute(attribute: string) {
        return this.node.getAttribute(attribute);
    }

    destroyChildren() {
        this.children.forEach((child) => {
            child.destroy();
        });
        this.children.length = 0;
    }

    destroy() {
        this.destroyChildren();
        this.node.remove();
    }
}
