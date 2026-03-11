# Team Member Showcase

![Static Badge](https://img.shields.io/badge/HTML-%23e34c26?style=for-the-badge&logo=HTML5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=CSS&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white)
![Static Badge](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![Static Badge](https://img.shields.io/badge/Vite-bd34fe?style=for-the-badge&logo=vite&logoColor=white)
![Static Badge](https://img.shields.io/badge/Tailwind-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Static Badge](https://img.shields.io/badge/typescript-%233178C6?style=for-the-badge&logo=typescript&logoColor=white)


This is the team member showcase design for a fictional tech company based on a project in the HTML, CSS & JavaScript course on [YouTube](https://youtu.be/kAiX0itnonM?si=AgG25UPPdiu5cFZu) by Codesistency. This implementation makes some slight adjustments to the original design by leveraging technologies such as React, Vite, TailwindCSS, TypeScript and JSON.

**This is a design project so only simple interactions such as hovering and clicking are supported by the application. No business logic is implemented!**

## Design
### Component Hierarchy

* `Header` Header for the team showcase page.
* `Cards` The collection of team member info cards.
  * `Card` The card for the specified team member
    * `CardHeader`  
    * `CardFooter`  
* `CallToAction` The call-to-action prompting the user to join the fictional development team.

### JSON Data
The original implementation uses hardcoded values for the team members. In this implementation, the data is stored in the `team.json` file as an array of objects to mimic real world use of an API. Thus, cards and data within them can now be added and removed simply by modifying the JSON file.

```json
[
    {
        "id": number,
        "name": string,
        "role": string,
        "bio": number,
        "picture": string
    }
]
```

## Additional Information
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
