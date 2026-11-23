# 📰 NewsMonkey

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<p align="center">
  A sleek, high-performance news web application delivering live headlines from across the globe, powered by <strong>NewsAPI</strong>, modern <strong>React 19</strong>, and <strong>Vite</strong>.
</p>

[Key Features](#-key-features) •
[Tech Stack](#-tech-stack) •
[Getting Started](#-getting-started) •
[Project Structure](#-project-structure) •
[Available Scripts](#-available-scripts) •
[Configuration](#-environment-variables)

</div>

---

## 🌟 Overview

**NewsMonkey** is a responsive, feature-rich news platform that aggregates real-time news articles across diverse categories. Built using modern React functional components and hooks, it offers seamless category browsing, infinite scroll pagination, and fluid progress bar feedback for a fast, app-like reading experience.

---

## ✨ Key Features

- ⚡ **Instant Multi-Category Browsing**: Seamless routing across categories:
  - 🌐 General
  - 💼 Business
  - 🎬 Entertainment
  - 🏥 Health
  - 🔬 Science
  - ⚽ Sports
  - 💻 Technology
- ♾️ **Infinite Scroll**: Continuous reading experience powered by `react-infinite-scroll-component` without needing manual pagination buttons.
- 📊 **Dynamic Top Loading Bar**: Visual feedback with `react-top-loading-bar` indicating real-time API fetch progress.
- 📱 **Fully Responsive UI**: Mobile-first responsive card layout built on Bootstrap 5 with responsive navigation and collapsible hamburger menu.
- 🖼️ **Graceful Image Fallback**: Smart error-handling ensures missing or broken thumbnails automatically display fallback visuals.
- 🏷️ **Informative Article Cards**: Displays news source badge, author attribution, formatted publication timestamps (GMT), concise descriptions, and direct external links to full stories.
- 🏷️ **Dynamic Document Titles**: Automatically updates browser tab titles to match the currently selected news category.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Front-end UI library using functional components and hooks |
| **[Vite](https://vite.dev/)** | Lightning-fast development server & production bundler |
| **[React Router DOM v7](https://reactrouter.com/)** | Client-side routing and declarative navigation |
| **[Bootstrap 5.3](https://getbootstrap.com/)** | Responsive grid system and component styling |
| **[React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component)** | Infinite scroll pagination |
| **[React Top Loading Bar](https://www.npmjs.com/package/react-top-loading-bar)** | Top loading progress indicator |
| **[NewsAPI](https://newsapi.org/)** | RESTful API supplying global top headlines |

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js**: `v18.0.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm** (comes with Node.js) or **pnpm** / **yarn**
- A free API key from **[NewsAPI.org](https://newsapi.org/)**

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/newsapp.git
cd newsapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_NEWS_API_KEY=your_news_api_key_here
```

> [!NOTE]
> Vite requires client-accessible environment variables to be prefixed with `VITE_`.

### 4. Run Development Server

```bash
npm run dev
```

The application will be accessible at: `http://localhost:5173/`

---

## 📂 Project Structure

```plaintext
newsapp/
├── public/                 # Static assets & favicon
├── src/
│   ├── assets/             # Asset files (images, icons)
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx      # Navigation header with category links
│   │   ├── News.jsx        # Core feed component & API fetch logic
│   │   ├── NewsItem.jsx    # Individual news article card
│   │   └── Spinner.jsx     # Centered loading spinner
│   ├── App.css             # Component-level styles
│   ├── App.jsx             # Main application component & route configuration
│   ├── index.css           # Global typography & layout styling
│   └── main.jsx            # React root mount & BrowserRouter setup
├── .env.local              # Local environment configuration (ignored by git)
├── .gitignore              # Git ignore file
├── eslint.config.js        # ESLint flat configuration
├── index.html              # HTML entry point with meta tags
├── package.json            # Project dependencies and npm scripts
├── vite.config.js          # Vite build and plugin configurations
└── README.md               # Project documentation
```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` directory. |
| `npm run preview` | Locally serves the production build for testing and verification. |
| `npm run lint` | Runs ESLint to check for code quality and formatting issues. |

---

## ⚙️ Environment Variables

| Variable | Description | Required | Default |
| :--- | :--- | :---: | :--- |
| `VITE_NEWS_API_KEY` | Your personal API authentication key from [NewsAPI.org](https://newsapi.org/) | Yes | None |

---

## 🌐 API Notice

This project utilizes the **NewsAPI Developer Plan**:
- Requests from the browser in development mode work seamlessly on `localhost`.
- Free-tier accounts on NewsAPI are limited to 100 requests per 24-hour window and restrict direct browser requests in production hosting environments (CORS limitation enforced by NewsAPI on free tiers).
- For production deployments, consider routing API calls through a simple backend proxy or upgrading your NewsAPI tier.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
