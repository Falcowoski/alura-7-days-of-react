interface HeaderMenuProps {
    children: JSX.Element | JSX.Element[]
}

function HeaderMenu({ children }: HeaderMenuProps) {
    return (
        <div className="header__menu">
            <ul className="header__list">
                {children}
            </ul>
        </div>
    );
}

export default HeaderMenu;