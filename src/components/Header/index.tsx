import HeaderMenu from './HeaderMenu';
import HeaderMenuItem from './HeaderMenuItem';
import HeaderLogo from './HeaderLogo';
import { StyledHeader, Navbar } from './Header.styled'
import logo from '../../img/logo.svg'

function Header() {
  return (
    <StyledHeader>
      <Navbar>
        <HeaderLogo imgSource={logo} alt="Logo da CasaVerde" link="#" />
        <HeaderMenu>
          <HeaderMenuItem text="Como fazer" />
          <HeaderMenuItem text="Ofertas" />
          <HeaderMenuItem text="Depoimentos" />
          <HeaderMenuItem text="Vídeos" />
          <HeaderMenuItem text="Meu carrinho" link="#" />
        </HeaderMenu>
      </Navbar>
    </StyledHeader>
  );
}

export default Header;