import "./ProjectCard.css";
export const ProjectCard = (project) => `
<div class="project-card">
<img src=${project.image}  alt=${project.title}/>
<div class="header">
<h2>${project.title}</h2>
<div>
<a href=${project.github} target="_blank">
<img src="/public/Icons/development_github.png" alt="GitHub Icon" />
</a>
<a href=${project.link} target="_blank">
<img src="/public/Icons/enlace.png" alt="enlace icon" />
</a>
</div>
</div>
<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;
