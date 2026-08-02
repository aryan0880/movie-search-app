# FlixMovies 🎬

> A modern, responsive movie discovery web app built with React 19 + Vite — Front-End Developer Internship (Week 2 Task).

🔗 **Live Demo:** [movie-search-app-one-sandy.vercel.app](https://movie-search-app-one-sandy.vercel.app/)
📦 **Repo:** [github.com/aryan0880/movie-search-app](https://github.com/aryan0880/movie-search-app)

---

## 📖 About

**FlixMovies** is a fully client-side movie search application that connects to the [TMDB (The Movie Database) API](https://www.themoviedb.org/) to let users discover, search, and save their favourite films — all in real time, with no backend required.

The app features a premium dark-first design with glassmorphism effects, smooth animations, a pill-style dark/light theme toggle, skeleton loading cards, and a persistent favourites collection powered by `localStorage`.

---

## ✨ Features

| Feature                 | Description                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| 🔍 **Live Search**      | Debounced search (450 ms) — results update as you type             |
| 🎬 **Popular Movies**   | Trending movies loaded on the home page via TMDB API               |
| 💀 **Skeleton Loading** | Shimmer skeleton cards shown while data is fetching                |
| ♥ **Favourites**        | Add/remove movies with a heart button; persisted in `localStorage` |
| 🗑️ **Clear All**        | One-click clear all favourites with a confirmation prompt          |
| 🌙 **Theme Toggle**     | Pill-style dark/light toggle with smooth animated thumb            |
| 📱 **Fully Responsive** | Works on mobile, tablet, and desktop                               |
| 🚫 **404 Page**         | Custom "Scene Not Found" page for unknown routes                   |
| ⚠️ **Error Handling**   | Graceful error and empty-state UI for failed or empty searches     |

---

## 🛠️ Tech Stack

| Technology          | Purpose                                      |
| ------------------- | -------------------------------------------- |
| **React 19**        | UI library                                   |
| **Vite 8**          | Development server & bundler                 |
| **React Router v7** | Client-side routing                          |
| **Axios**           | HTTP requests to TMDB API                    |
| **Tailwind CSS v3** | Utility-first styling                        |
| **Context API**     | Global favourites state management           |
| **localStorage**    | Persistent favourites across sessions        |
| **TMDB API**        | Movie data (posters, ratings, release dates) |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Top nav with logo, search bar, theme toggle & favourites link
│   ├── SearchBar.jsx     # Debounced search input
│   ├── MovieCard.jsx     # Movie poster card with hover overlay & fav button
│   └── SkeletonCard.jsx  # Shimmer placeholder card shown during fetch
├── pages/
│   ├── Home.jsx          # Main page — hero section + movie grid
│   ├── Favourites.jsx    # Saved movies page
│   └── NotFound.jsx      # 404 page
├── context/
│   └── FavouritesContext.jsx  # Context + localStorage logic for favourites
├── hooks/
│   └── useFetch.js       # Generic data-fetching hook (loading / data / error)
├── App.jsx               # Root component with router and layout
├── main.jsx              # React DOM entry point
└── index.css             # Global styles, CSS variables, animations
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- A free TMDB API key → [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

### Installation

```bash
# Clone the repository
git clone https://github.com/aryan0880/movie-search-app.git
cd movie-search-app

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔑 Environment Variables

| Variable            | Description                     |
| ------------------- | ------------------------------- |
| `VITE_TMDB_API_KEY` | Your TMDB v3 API key (required) |

> ⚠️ Never commit your `.env` file. It's already listed in `.gitignore`.

---

## 📸 Highlights

- **Glassmorphism Navbar** with backdrop blur that adapts between dark and light themes
- **Hover overlays** on movie cards that slide up with title, year, and rating
- **Pulse animation** on the favourite heart button when toggled
- **Fade-up entrance animations** staggered across the movie grid
- **Light mode** with correct colour adaptation — no invisible text

---

## 🙏 Credits

- Movie data provided by [TMDB](https://www.themoviedb.org/)
- Built as part of **Front-End Developer Internship — Week 2**
