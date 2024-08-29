import BaseComponent from '@Src/components/common/base-component';
import ContentPage from '@Src/components/common/content-page';

export default class WinnersPage extends ContentPage {
  constructor() {
    super({ containerTag: 'main', title: 'Winners' });
    this.createContent();
  }

  private createContent = () => {
    const elem = new BaseComponent<HTMLHeadingElement>({ tag: 'h1', text: 'Winners page' });
    this.container.node.append(elem.node);
  };
}
