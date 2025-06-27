# Beyond Labs Task

This project is a website management dashboard built with [Create React App]and TypeScript.  
It allows users to add, edit, and view website data, including country, language, categories, and more.  
The UI uses Material-UI (MUI) components and supports dynamic form filling, validation, and data transfer between pages.

---

## Tech Stack

- **React** (with Create React App)
- **TypeScript**
- **Material-UI (MUI)** for UI components
- **Tailwind CSS** for utility-first styling
- **Formik** for form validation
- **Yup** for form validation schema
- **Axios** for API requests

## Features

- Add and edit website details with a dynamic form
- Select country and language with flag icons
- Multi-select categories with checkboxes
- Video preview support
- Data table with clickable rows for editing
- Form validation with Formik and Yup
- Responsive design with Tailwind CSS and MUI

---

### FrontEnd Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kondalu177/beyondlasTask.git

   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

### Backend Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kondalu177/beyondlasTask.git
   cd sever
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Run command
   ```bash
   nodemon index.js
   ```

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

---

## Project Structure

```
src/
  ├── Components/
  │     ├── AddWebsite.tsx
  │     ├── WebsiteTable.tsx
  │     ├── Checkboxmail.tsx
  │     ├── Validation/
  │     │     └── FormValidation.tsx
  │     └── Hooks/
  │           └── useContries.tsx
  ├── assets/
  │     └── React.mp4
  ├── App.tsx
  └── index.tsx
```

---

## API & Data

- Country and language data is fetched from (https://restcountries.com/v3.1/all?fields=cca2,name,flags,languages).
- Website data is managed locally or via a backend API (see `axios` usage in components).

---

## Customization

- To add more fields or change validation, edit `FormValidation.tsx` and the relevant form components.
- To change the video, replace `src/assets/React.mp4`.

---

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Material-UI documentation](https://mui.com/)
- [Formik documentation](https://formik.org/)
- [Yup documentation](https://github.com/jquense/yup)

---
