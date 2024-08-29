import classes from './style.module.scss';

type PageProps = {
  title: string;
};

export default class BasePage {
  protected title: string;

  constructor(props: PageProps = { title: '' }) {
    this.title = props.title;
  }

  render() {
    document.body.innerHTML = '';
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add(classes.page);
    document.title = this.title;
  }
}
