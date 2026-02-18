# 🎬 Movies Explorer

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38b2ac?logo=tailwind-css)
![Zustand](https://img.shields.io/badge/State-Zustand-orange)

> **Live Demo:** [Check it out on Vercel](https://movies-explorer-silk.vercel.app/) 🚀

A modern, responsive web application for exploring movies, checking details, and managing your favorite list. Built with the latest React 19 features and TypeScript, focusing on performance, clean code, and user experience.

> **Note**: This is a personal pet project developed to demonstrate modern React development practices and architecture.

## ✨ Features

- **🔍 Smart Search**: Real-time movie search functionality powered by the OMDb API.
- **📱 Responsive Design**: Fully responsive UI built with Tailwind CSS v4, looking great on mobile, tablet, and desktop.
- **❤️ Favorites System**: Manage your personal collection of favorite movies (persisted state).
- **🚀 Performance First**: Utilizes React `Suspense` and `lazy` loading for optimal bundle size and loading speeds.
- **📄 Detailed Views**: Comprehensive movie details including plot, ratings, and meta information.
- **🛠️ Robust Architecture**: 
  - **Type Safety**: Full TypeScript integration for reliable code.
  - **State Management**: Scalable global state management using Zustand.
  - **Testing**: Unit tests setup with Vitest and React Testing Library.
  - **Quality**: Enforced code style with ESLint and Prettier.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Compiler**: [React Compiler](https://react.dev/learn/react-compiler) (Experimental)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [Sass](https://sass-lang.com/)
- **Data Fetching**: Native Fetch API with custom hooks
- **Testing**: [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/)
- **Code Quality**: ESLint, Prettier

## 🚀 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BKabachenko/movies-explorer.git
   cd movies-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your OMDb API key:
   ```env
   VITE_API_KEY=your_omdb_api_key_here
   VITE_API_URL=https://www.omdbapi.com/
   ```
   > You can get a free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action.

## 🧪 Running Tests

To run the test suite and ensure everything is working correctly:

```bash
npm run test
```

## 📂 Project Structure

```bash
src/
├── api/            # API integration and fetch functions
├── assets/         # Static assets (images, icons)
├── components/     # Reusable UI components
├── constants/      # Global constants and config
├── hooks/          # Custom React hooks
├── layouts/        # Page layouts (MainLayout, etc.)
├── pages/          # Application views/pages
├── store/          # Global state management (Zustand)
├── types/          # TypeScript type definitions
└── utils/          # Helper functions
```

## 🔮 Future Improvements

- [ ] Add user authentication (Firebase/Supabase).
- [ ] Implement dark/light mode toggle.
- [ ] Add more complex filtering (by year, genre).
- [ ] Integrate a backend for persistent user data.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or bug fixes, please feel free to open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Made with ❤️ by [Bogdan Kabachenko](https://github.com/BKabachenko)
