#Project initialization

> npm create vite@latest
> npm run dev
> npm i bootstrap@latest
  > delete all from App.css
  > main.tsx -> remove import ‘./index.css’
  > npm i bootstrap@latest
  > main.tsx -> import "bootstrap/dist/css/bootstrap.css";
> Install MUI Icons

package.json
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@date-io/dayjs": "^2.15.0",
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@mui/icons-material": "^5.10.2",
    "@mui/material": "^5.10.2",
    "@mui/x-data-grid": "^5.15.3",
    "@mui/x-date-pickers": "5.0.0-beta.5",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "dayjs": "^1.11.5",
    "react-router-dom": "^6.3.0",
    "typescript": "^5.2.2"
  },
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
