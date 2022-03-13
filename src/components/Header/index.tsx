import HeaderMenu from './HeaderMenu';
import HeaderMenuItem from './HeaderMenuItem';
import HeaderLogo from './HeaderLogo';
import logo from '../../img/logo.svg'

function Header() {
    return (
        <header className="header">
            <nav className="header__navbar">
                <HeaderLogo imgSource={logo} alt="Logo da CasaVerde" link="#" />
                <HeaderMenu>
                    <HeaderMenuItem text="Como fazer" />
                    <HeaderMenuItem text="Ofertas" />
                    <HeaderMenuItem text="Depoimentos" />
                    <HeaderMenuItem text="Vídeos" />
                    <HeaderMenuItem text="Meu carrinho" link="#" />
                </HeaderMenu>
            </nav>
        </header>
    );
}

export default Header;