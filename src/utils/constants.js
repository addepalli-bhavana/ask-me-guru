
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import company6 from "../assets/company6.png";
import company7 from "../assets/company7.png";
import company8 from "../assets/company8.png";

export const navLinks = [
  { id: 1, label: "home" },
  { id: 2, label: "about us" },
  { id: 3, label: "services" },
  { id: 4, label: "contact" },
  { id: 5, label: "login" },
];

export const sidebarLinks = [...navLinks];

export const companyLogos = [
  { id: 1, source: company1 },
  { id: 2, source: company2 },
  { id: 3, source: company3 },
  { id: 4, source: company4 },
  { id: 5, source: company5 },
  { id: 6, source: company6 },
  { id: 7, source: company7 },
  { id: 8, source: company8 },
];

export const footerIcons = [
  { id: 1, url: "https://facebook.com", icon: <FaFacebookF /> },
  { id: 2, url: "https://twitter.com", icon: <FaTwitter /> },
  { id: 3, url: "https://www.google.com", icon: <FaGooglePlusG /> },
];

export const footerLinks1 = [
  { id: 1, label: "home" },
  { id: 2, label: "about us" },
  { id: 3, label: "contact us" },
  { id: 4, label: "privacy" },
];
