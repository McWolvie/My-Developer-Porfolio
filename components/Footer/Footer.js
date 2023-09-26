import "./Footer.css";
import { Button } from "../Button/Button";
export const Footer = () => `
<p>Fundación ONCE -<em>McWolvie</em>- 28/07/2023</p>
<div>
${Button("Icons/twitter.png", "Twitter", "https://twitter.com/home")}
${Button("Icons/github.png", "GitHub", "https://github.com/McWolvie")}
${Button("Icons/linkedin.png", "LinkedIn", "https://www.linkedin.com/feed/")}
${Button(
  "Icons/instagram.png",
  "Instagram",
  "https://www.instagram.com/mcwolvie/"
)}
</div>
`;
