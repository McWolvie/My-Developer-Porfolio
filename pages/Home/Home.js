import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="home">
<h2>A long, long time ago in a galaxy far, far away...</h2>
<p>My occupation was corporate design technician. "Luminous Signs".<br>
At present the force has been revealed to me.<br> I am studying an intensive course or master's degree in web application development<br> through Digital Talent and the ONCE Foundation.<br>
I'm a middle-aged Padawan who loves comics, series, Star Wars movies, Marvel, DC, Dragon Ball...<br>
With time and with the help of my teachers, I will become a master web developer.<br></p>
<h3>May the force be with you, always!!</h3>
<a href="mailto:lobezno2001@gmail.com" target="_blank"><em> Hello There‼📧 </em></a>
</section>`;
};
