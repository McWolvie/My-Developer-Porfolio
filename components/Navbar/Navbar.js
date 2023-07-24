import "./Navbar.css";
export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "🌞") {
    themeBtn.innerText = "🌜";
  } else {
    themeBtn.innerText = "🌞";
  }
};

export const Navbar = () => `
<nav>
<h2>Oscar C.R <span>‹McWolvie›</span></h2>
<ul>
<li>
<a href="#" id="homelink">Home</a>
</li>
<li>
<a href="#" id="projectslink">My projects</a>
</li>
<li>
<a href="#" id="skillslink">Skills</a>
</li>
<li>
<button id="themeBtn">🌞</button>
</li>
</ul>
</nav>
`;
