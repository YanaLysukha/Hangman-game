import BaseComponent from '../base-component';

export default class Footer extends BaseComponent {
  constructor() {
    super({ tag: 'footer' });
    document.body.append(this.node);
    this.createContent();
  }

  createContent = () => {
    const authorGithub = new BaseComponent(
      { tag: 'div' },
      new BaseComponent({
        tag: 'a',
        text: 'Yanina Lysukha',
        href: 'https://github.com/yanalysukha',
        target: '_blank',
      }),
    );
    const schoolLink = new BaseComponent(
      { tag: 'a', href: 'https://rs.school/', target: '_blank' },
      new BaseComponent({ tag: 'img', src: 'img/rs_school_logo.svg' }),
    );
    this.node.append(authorGithub.node);
    this.node.append(schoolLink.node);
  };
}
