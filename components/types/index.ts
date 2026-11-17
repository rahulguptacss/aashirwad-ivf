import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
}

export interface HeaderData {
  logo_text: string;
  logo: string;
  links: LinkType[];
  button_text: string;
  button_href: string;
  phone: string;
  phone_href: string;
}

export interface FooterData {
  logo_text: string;
  logo: string;
  description: string;
  links: LinkType[];
  socials: LinkType[];
  address: string;
  phone: string;
  email: string;
  copyright: string;
}

export interface BackToTopData {
  aria_label: string;
}

export interface HeroSectionData {
  id: string;
  eyebrow: string;
  title_start: string;
  title_highlight: string;
  title_mid: string;
  title_end: string;
  image: string;
  couple_image: string;
}

export interface AboutSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  button_text: string;
  button_href: string;
  image: string;
}

export interface TreatmentItem {
  title: string;
  text: string;
  image: string;
  icon: string;
}

export interface TreatmentsSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  items: TreatmentItem[];
}

export interface WhySectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  image: string;
  lab_image: string;
  couple_image: string;
  points: { title: string; text: string; icon: string }[];
}

export interface TestimonialsSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  stat_value: string;
  stat_text: string;
  avatars: string[];
  items: { quote: string; name: string; role: string; image: string; stars: number }[];
}

export interface FaqSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  items: { question: string; answer: string; image?: string }[];
}

export interface ContactSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  title_end: string;
  description: string;
  form_title: string;
  form_title_highlight: string;
  location_title: string;
  call_title: string;
  email_title: string;
  address: string;
  phone: string;
  email: string;
  name_placeholder: string;
  email_placeholder: string;
  phone_placeholder: string;
  date_placeholder: string;
  message_placeholder: string;
  button_text: string;
  success_message: string;
  map_embed: string;
}

export const siteJson = data;
export const common = data.common;
export const template = data.categories.Healthcare.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;
