import "./Skills.css";
import { cleanPage } from "../../utils/cleanPage";
import { skills } from "../../data/skills";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Divider } from "../../components/Divider/Divider";
export const Skills = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <section class="skills">
    <h2>Skills</h2>
    ${Divider()}
    <div class="skills-container"></div>
    </section>`;
    const container = document.querySelector(".skills-container");
    for (const skill of skills) {
        const figure = document.createElement("figure");
        figure.innerHTML = ProjectCard("skill");
        container.appendChild(figure);
    }
}