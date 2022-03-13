import { Anchor } from './Header.styled';

interface HeaderLogoProps {
  imgSource: string,
  alt: string,
  link?: string
}

function HeaderLogo({ imgSource, alt, link = '#' }: HeaderLogoProps) {
  return (
    <Anchor href={link}>
      <img src={imgSource} alt={alt} />
    </Anchor>
  );
}

export default HeaderLogo;