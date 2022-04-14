**important links**

[jsconfig](https://code.visualstudio.com/docs/languages/jsconfig)  
[module aliasing](https://www.npmjs.com/package/module-alias)  
[prop types](https://www.npmjs.com/package/prop-types)

**github**

- protected branches
- environment variables
- kanban boards
- dev branch
- github actions

**ui/ux**

- figma
- storybook

**files**

```js
// libraries
import React from "react";

// components
import { Form } from "components/Form";

// styles
import "css/index.scss";

// utils
import { debounce } from "utils/debounce.js";

/**
* * Playgound.js or Sandbox.js for testing/playing
* * Setup Error Boundary
* /
```

**libraries**

- [x] sass
- [x] react-router-dom
- [x] axios
- [ ] prop types
- [ ] material-ui
- [ ] material-ui icons
- [x] redux
- [x] react-redux
- [x] redux-thunk
- [x] redux-logger

**public**

- [x] del react logos
- [x] del react favicon
- [ ] add own favicon
- [ ] modify manifest.json

**index.html**

- [ ] link favicon
- [ ] theme-color
- [ ] other libraries (fonts, icons etc)
- [ ] google material icons link

**index.css**

- [x] :root
- [x] css variables
- [x] resets
- [x] media queries

**.env**

```json
GENERATE_SOURCEMAP=false
```

**package.json**

```json
// only for development

"proxy": "http://localhost:4000",
```

**deploying to netlify**

```js
- create _redirects in public folder

/* /index.html 200
```

**index.css**

```css
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --bg-color: #111;
  --linkedIn: #007bb6;
  --facebook: #3b5998;
  --twitter: #00aced;
  --pinterest: #cb2027;
  --youtube: #bb0000;
  --instagram: #bc2a8d;
  --wordpress: #21759b;
  --myRed: #f44336;
  --myRed2: #d94631;
  --pinkRed: #c92432;
  --canvasRed: #923d41;
  --myBlue: #1c8adb;
  --myBluee: #3bbced;
  --myGreen: #39dc79;
  --w3Green: #4caf50;
  --microsoftGreen: #008272;
  --microsoftRed: #911844;
  --microsoftDarblue: #3f4b61;
  --dcodeGreen: #009879;
  --myDark1: #111;
  --myDark2: #222;
  --myDark333: #333;
  --myGrey: #ddd;
  --lightCharcoal: #727272;
  --deepCharcoal: #141414;
  --travisYellow: #ff9800;
  --travisYellow2: #f88f00;
  --brightYellow: #ffc600;
  --nnnYellow: #ffae00;
  --travisBlue: #2196f3;
  --udemyBlue: #0f7c90;
  --travisGreen: #8bc34a;
  --travisPink: #e91e63;
  --travisBleu: #009688;
  --myBlack: rgba(13, 12, 14, 1);
  --lightenedBlack: #1f1c21;
  --lightPurple: #302d43;
  --coolPurple: #533872;
  --darkPurple: #282639;
  --neonGreen: #92cf48;
  --lightGrey: #f4f6f9;
  --darkGrey: #eaedf3;
  --deepGrey: #717171;
  --lighterGrey: #f1f1f1;
}

body {
  margin: 0;
  font-family: roboto, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

button {
  outline: none;
  border: none;
}

a {
  text-decoration: none;
}

/* Small (sm) devices (landscape phones, 567px and up) */
@media screen and (min-width: 568px) {
  :root {
    --bg-color: #222;
    font-size: 22px;
  }
}

/* Medium (md) devices (tablets, 768px and up) */
@media screen and (min-width: 768px) {
  :root {
    --bg-color: #333;
    font-size: 24px;
  }
}

/* Large (lg) devices (desktops, 992px and up) */
@media screen and (min-width: 992px) {
  :root {
    --bg-color: violet;
    font-size: 30px;
  }
}

/* Extra (xl) devices (large desktops, 1200px and up) */
@media screen and (min-width: 1200px) {
  :root {
    --bg-color: violet;
    font-size: 40px;
  }
}
```
