# React-10-Tailwind-CSS


### Note
### list down the different ways of stling the component?
- CSS
- Inline CSS
- SCSS -> used for nested Styling
- Styled Component
- Material Designs 
- Chakara UI
- Tailwind CSS

### How to configure tailwind into the project?
It's comes with some predefined configuration and same need to configure in project.
Different Framework or library have it's own configuration like parcels and Angular comes with difference configuration.
For Detailed knowladge follow the tailwind documentation.

### Let's see parcels configuration: 

- First install the tailwind packages as `dev-dependency`
```
npm install -D tailwindcss postcss
npx tailwindcss init
```
- the Second commands creates a `.postcssrc`file if not then create it manually and add the following configuration: 
```
{
  "plugins": {
    "tailwindcss": {}
  }
}
```
- Now Create `tailwind.config.js` file and add configuration: 
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- In the last step add the imports inside `index.css` 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Refere the below links for more info about `tailwind.config.js` file: 
+ [content](https://tailwindcss.com/docs/content-configuration)
+ [Theme](https://tailwindcss.com/docs/theme)
+ [Plugins](https://tailwindcss.com/docs/plugins)