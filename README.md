# Website Project

This is a website project built with **React** and **Vite**. It includes a modular design with reusable components and structured pages for better maintainability and scalability.

## Features

- **Modular Components**:
  - `NavBar`: Responsive navigation bar for seamless browsing.
  - `Home`: The landing page component.
  - `Media`: Media gallery or related features.
- **Pages**:
  - `About`: Information about the website or owner.
  - `Blog`: Dynamic blog section.
  - `Publication`: Publications or related content.
- **Styling**: Global styles in `style.css`.
- **Optimized for Performance**: Built with Vite for fast builds and hot module replacement (HMR).

---

## Project Structure

```plaintext
src/
├── components/
│   ├── Home/
│   ├── Media/
│   ├── NavBar/
├── pages/
│   ├── About/
│   ├── Blog/
│   ├── Publication/
├── App.jsx
├── main.jsx
├── style.css
public/
node_modules/
```

---

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Build tool for fast development and production builds.
- **JavaScript (ES6)**: Core programming language.
- **CSS**: Styling for the project.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build the project for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

## Deployment

This project is deployed using **Vercel**. To deploy:
1. Link your project to Vercel via their dashboard.
2. Push your changes to the main branch.
3. Vercel automatically deploys your project.