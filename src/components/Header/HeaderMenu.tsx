import { Menu, List } from "./Header.styled";

interface HeaderMenuProps {
  children: JSX.Element | JSX.Element[]
}

function HeaderMenu({ children }: HeaderMenuProps) {
  return (
    <Menu>
      <List>
        {children}
      </List>
    </Menu>
  );
}

export default HeaderMenu;