import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="home">
<h2>A long, long time ago in a galaxy far, far away...</h2>
<p>My occupation was corporate design technician. "Luminous Signs".
At present the force has been revealed to me. 
I am studying an intensive course or master's degree in web application development 
through Digital Talent and the ONCE Foundation.
I'm a middle-aged Padawan who loves comics, series, Star Wars movies, Marvel, DC, Dragon Ball...
With time and with the help of my teachers, I will become a master web developer.
<a href ="mailto:lobezno2001@gmail.com" target="a_blank"><bold>My the force be with you, always!!</bold></a></p>
<div class="mail">
<img src="Img/Curriculum-Portrait1.png" alt="Curriculum-Portrait1 logo"/>
</div>
</section>`;
};
