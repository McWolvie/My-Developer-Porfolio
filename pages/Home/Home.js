import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="home">
<h3>A long, long time ago in a galaxy far, far away...</h3>
<p>My occupation was corporate design technician. "Luminous Signs".
At present the force has been revealed to me. I am studying an intensive course or master's degree in web application development through Digital Talent and the ONCE Foundation.
I'm a middle-aged Padawan who loves comics, series, Star Wars movies, Marvel, DC, Dragon Ball...
With time and with the help of my teachers, I will become a master web developer.<br>
May the force be with you, always!!<br>
<a href="mailto:ironman.74@hotmail.com"><em>Hello There‼ ⇒</em> </a></p>
</section>`;
};