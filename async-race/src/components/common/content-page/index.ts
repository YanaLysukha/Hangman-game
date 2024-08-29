import Header from '@Src/components/ui/header';
import Container from '@Src/components/ui/container';
import BasePage from '../base-page';
import classes from './style.module.scss';

type ContentPageProps = {
  title: string;
  containerTag: keyof HTMLElementTagNameMap;
};

export default class ContentPage extends BasePage {
  header: Header;

  protected container: Container;

  constructor(props: ContentPageProps) {
    super({ title: props.title });
    this.header = new Header({});
    this.container = new Container({
      tag: props.containerTag,
      class: classes.content,
    });
  }

  render = () => {
    super.render();
    document.body.classList.add(classes.contentPage);
    document.body.append(this.header.node, this.container.node);
  };
}
