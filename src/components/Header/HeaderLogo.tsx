interface HeaderLogoProps {
    imgSource: string,
    alt: string,
    link?: string
}

function HeaderLogo({ imgSource, alt, link = '#'}: HeaderLogoProps) {
    return (
        <a className="header__logo" href={link}>
            <img src={imgSource} alt={alt} />
        </a>
    );
}

export default HeaderLogo;