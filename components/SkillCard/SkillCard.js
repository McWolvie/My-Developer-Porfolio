import "./SkillCard.css";
export const SkillCard = (skill) =>`
<div class="skill-card">
<img src=${skill.image} alt=${skill.title}/>
<div class="header">
<h2>${skill.title}</h2>
</div>
</div>`;