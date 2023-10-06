import "./Skills.css";
const template = () => `
    <section class="skills">
    <h2 class="skill-header">My Top Skills</h2>
    <div class="skills-wrapper">
        <img
          src="/icons/office.jpg"
          alt="HTML5"
          class="icon-card"
        />
        <img
        src="/icons/google-docs.jpg"
        alt="HTML5"
        class="icon-card"
      />
      <img
      src="/icons/Html5.png"
      alt="HTML5"
      class="icon-card"
    />
        <img
          src="/icons/Css3.png"
          alt="CSS3"
          class="icon-card"
        />
        <img
          src="/icons/Js.png"
          alt="JavaScript"
          class="icon-card"
        />
        <img
        src="/public/icons/React.png"
        alt="React"
        class="icon-card"
          />
        <img
        src="/icons/Git.png"
        alt="Git"
        class="icon-card"
        />
        <img
        src="/icons/mongo-DB.png"
        alt="Github"
        class="icon-card"
        />
        <img
        src="/icons/Node.png"
        alt="Node"
        class="icon-card"
        />
        <img
        src="/icons/Davinci-resolve.png"
        alt="Davinci"
        class="icon-card"
        />
        <img
        src="/icons/Vite.png"
        alt="SusaSchool"
        class="icon-card"
        />
        <img
        src="/icons/Canva.png"
        alt="Canva"
        class="icon-card"
        />
        <img
        src="/icons/Blender.jpg"
        alt="Canva"
        class="icon-card"
        />

    </div>
  </section>
    `;

export const Skills = () => {
  document.querySelector("main").innerHTML = template();
};
