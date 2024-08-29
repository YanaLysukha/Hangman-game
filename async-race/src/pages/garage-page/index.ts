import BaseComponent from '@Src/components/common/base-component';
import ContentPage from '@Src/components/common/content-page';

export default class GaragePage extends ContentPage {
  constructor() {
    super({ containerTag: 'main', title: 'Garage' });
    this.createContent();
  }

  private createContent = () => {
    const elem = new BaseComponent<HTMLHeadingElement>({ tag: 'h1', text: 'Garage page' });
    this.container.node.append(elem.node);
  };
}
