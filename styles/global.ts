import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
	padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  vertical-align: baseline;
}

html, body, #root {
  min-height: 100%;
  line-height: 1;
}

body {
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: black;
  font-size: 14px;
  font-family: 'Crimson Text', Arial, Helvetica, sans-serif;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
  cursor: pointer;
}

a {
  cursor: pointer;
  text-decoration: none; 
}

:root {
  --primary-white: #f5f5f5;
  --primary-black: #0e0e0e;
  --primary-grey: #7C8483;
  --primary-blue: #60B2E5;

  --secondary-black: #292626;
  --secondary-black-hover: rgba(0, 0, 0, 0.8);

  --transparent-black: rgba(0, 0, 0, 0.15);
  --transparent-black-hover: rgba(0, 0, 0, 0.2);
}
`;
