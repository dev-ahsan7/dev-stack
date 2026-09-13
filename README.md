# 🧩 DevStack

**Build Your Ideal Development Stack**

DevStack is a technology explorer that lets you browse frontend, backend, database, and tooling options, compare them side by side, and put together a curated stack that fits your next project.

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

---

## 📖 About the Project

DevStack helps developers cut through decision fatigue when starting a new project. Instead of hopping between docs and blog posts to compare frameworks, databases, and tools, you get one clean catalog — complete with category, difficulty level, and community rating — so you can build and visualize your ideal stack in minutes.

## 🛠️ Built With

- **React** — component-based UI library powering the interface
- **TypeScript** — static typing across all components and data models
- **Tailwind CSS** — utility-first styling for a fast, consistent design system
- **react-icons** — icon set used throughout the cards and UI
- **react-toastify** — toast notifications for add/remove stack actions

## ✨ Features

- 🗂️ **Curated Technology Catalog** — Browse frontend, backend, database, and tooling options as clean, scannable cards, each showing category, difficulty level, and a community rating.
- ➕ **Build Your Own Stack** — Add or remove technologies on the fly and watch your personal stack update live in a dedicated sidebar, with a one-click "Remove All" to start over.
- 📱 **Fully Responsive Layout** — A polished experience on any screen size, from a sticky desktop sidebar to a reordered, thumb-friendly mobile layout.

---

## 🙋 React Questions & Answers

**i. What is JSX, and why is it used in React?**
JSX is a way to write HTML-looking code right inside JavaScript. React then turns it into real HTML behind the scenes. It's used because it's much easier to picture what the UI looks like this way, instead of writing a bunch of `document.createElement()` calls.

**ii. What is the difference between props and state?**
Props are data a parent component passes down to a child, and the child can't change them. State is data a component keeps and manages on its own, and it can change over time — like when the user adds something new.

**iii. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component "remember" a value and re-render whenever that value changes. I used it in `TechCatalogSection` to keep track of the `stack` array — the list of technologies the user has added so far.

**iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
Normally, `useEffect` runs some code after the component renders — like fetching data once the page loads. In this project I actually didn't end up using `useEffect` for that part. Instead I used React's `use()` hook together with `Suspense`, which lets me "wait" for the fetch promise right inside the component while Suspense shows a loading fallback. The goal is the same either way: load the data without freezing up the rest of the page.

**v. Why does every item in a `.map()` list need a unique `key` prop?**
Because React needs a way to tell items in a list apart. Without a `key`, if the list changes (like adding or removing a tech card), React can get confused about which item is which and might update or re-render things incorrectly.

**vi. What is conditional rendering? Show one place you used it.**
Conditional rendering just means showing different UI depending on some condition. Example: in `StackSidebar`, if `stack.length === 0` I show "No technologies selected yet" with an empty state box, and if it's not empty I show the actual list of added technologies instead.

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
The parent passes data down through props, like `tech` going into `TechCard`. To send something back up, the parent gives the child a function as a prop too (like `onAdd`), and the child just calls that function when something happens — like clicking "Add to Stack" — so the parent's state gets updated.

---

<p align="center">Made with ❤️ for developers deciding what to build with next.</p>