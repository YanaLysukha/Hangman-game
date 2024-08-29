import BaseComponent, { ElementProps } from '@Src/components/common/base-component';

type HeaderProps = Omit<ElementProps<HTMLElement>, 'tag'>;

export default class Header extends BaseComponent<HTMLElement> {
  constructor(props: HeaderProps) {
    super({ tag: 'header', text: 'Header', ...props });
  }
}
