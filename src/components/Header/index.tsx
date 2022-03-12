import HeaderMenu from './HeaderMenu';
import HeaderMenuItem from './HeaderMenuItem';
import logo from '../../img/logo.svg'

function Header() {
    return (
        <header className="header">
            <nav className="header__navbar">
                <a className="header__logo" href="#">
                    <img src={logo} alt="Logo da CasaVerde" />
                </a>

                {/* <HeaderLogo /> */}

                <HeaderMenu>
                    <HeaderMenuItem text="Como fazer" />
                    <HeaderMenuItem text="Ofertas" />
                    <HeaderMenuItem text="Depoimentos" />
                    <HeaderMenuItem text="Vídeos" />
                    <HeaderMenuItem text="Meu carrinho" link="#" />
                </HeaderMenu>

                {/* <div className="header__menu">
                    <ul className="header__list">
                        <li><a href="#">Como fazer</a></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Depoimentos</a></li>
                        <li><a href="#">Vídeos</a></li>
                        <li><a href="#">Meu carrinho</a></li>
                    </ul>
                </div> */}
            </nav>
        </header>
    );
}

export default Header;