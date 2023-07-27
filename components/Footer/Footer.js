import "./Footer.css";
import { Button } from "../Button/Button";
export const Footer = () => `
<p>Fundación ONCE -<em>McWolvie</em>- 28/07/2023</p>
<div>
${Button("/icons/twitter.png", "Twitter", "https://twitter.com/home")}
${Button("/icons/github.png", "GitHub", "https://github.com/McWolvie")}
${Button("/icons/linkedin.png", "LinkedIn", "")}
${Button("/icons/instagram.png", "Instagram")}
</div>
`;
