// QGISRed website type definitions

export interface NavItem {
  text: string;
  href: string;
  submenu?: NavItem[];
}

export interface CapabilityCard {
  title: string;
  icon: string; // icon name or emoji shorthand
  href: string;
}

export interface SupportCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

export interface FooterLogo {
  src: string;
  alt: string;
  href?: string;
  width: number;
  height: number;
}

export interface FooterNavColumn {
  links: { text: string; href: string }[];
}
