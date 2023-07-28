import "./Button.css";
export const Button = (icon, text, url, _blank) => `
<button class="my-btn">
<a href=${url} target=${_blank}>
<img src=${icon} alt='${text} icon'/>
</a>
</button>
`;
