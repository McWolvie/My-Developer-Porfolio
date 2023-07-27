import "./Footer.css";
import { Button } from "../Button/Button";
export const Footer = () => `
<p>Fundación ONCE -<em>McWolvie</em>- 28/07/2023</p>
<div>
${Button(
  "/public/Icons/twitter.png",
  "Twitter",
  "https://twitter.com/McWolvie"
)}
${Button("/public/Icons/github.png", "GitHub", "https://github.com/McWolvie")}
${Button(
  "/public/Icons/linkedin.png",
  "LinkedIn",
  "https://www.linkedin.com/in/%C3%B3scar-c-r-b151b01ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B1dynrYp7SoCmya0WO%2F%2BFpA%3D%3D"
)}
${Button(
  "/public/Icons/instagram.png",
  "Instagram",
  "https://www.instagram.com/mcwolvie/"
)}
</div>
`;
