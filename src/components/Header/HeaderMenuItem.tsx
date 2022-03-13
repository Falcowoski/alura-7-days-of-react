interface HeaderMenuItemProps {
  text: string
  link?: string,
}

function HeaderMenuItem({ text, link = '#' }: HeaderMenuItemProps) {
  return (
    <li><a href={link}>{text}</a></li>
  );
}

export default HeaderMenuItem;