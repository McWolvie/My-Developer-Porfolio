import "./Button.css";
export const Button = (icon, text, url) => `
<button class="my-btn">
<a href=${url}>
<img src=${icon} alt='${text} icon'/>
<h4>${text}</h4></a>
</button>
`;
