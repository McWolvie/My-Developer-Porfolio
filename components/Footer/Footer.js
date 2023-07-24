import "./Footer.css";
import { Button } from "../Button/Button";
export const Footer = () => `
<div>
${Button("/icons/twitter.png", "Twitter")}
${Button("/icons/github.png", "GitHub")}
${Button("/icons/linkedin.png", "LinkedIn")}
</div>
`;
