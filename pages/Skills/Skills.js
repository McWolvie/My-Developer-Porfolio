import "./Skills.css";
const template = () => `
    <section class="skills">
    <h2 class="skill-header">My Top Skills</h2>
    <div class="skills-wrapper">
        <img
          src="Icons/office.jpg"
          alt="Office"
          class="icon-card"
        />
        <img
        src="Icons/google-docs.jpg"
        alt="Google-docs"
        class="icon-card"
        />
        <img
        src="Icons/html5.png"
        alt="HTML5"
        class="icon-card"
        />
        <img
          src="Icons/Css3.png"
          alt="CSS3"
          class="icon-card"
        />
        <img
          src="Icons/Js.png"
          alt="JavaScript"
          class="icon-card"
        />
        <img
        src="Icons/react.png"
        alt="React"
        class="icon-card"
          />
        <img
        src="Icons/Git.png"
        alt="Git"
        class="icon-card"
        />
        <img
        src="Icons/mongo-DB.png"
        alt="Mongodb"
        class="icon-card"
        />
        <img
        src="Icons/Node.png"
        alt="Node"
        class="icon-card"
        />
        <img
        src="Icons/davinci-resolve.png"
        alt="Davinci"
        class="icon-card"
        />
        <img
        src="Icons/Vite.png"
        alt="Vite"
        class="icon-card"
        />
        <img
        src="Icons/Canva.png"
        alt="Canva"
        class="icon-card"
        />
        <img
        src="/Icons/Blender.png"
        alt="Blender"
        class="icon-card"
        />
    </div>
  </section>
    `;

export const Skills = () => {
  document.querySelector("main").innerHTML = template();
};
