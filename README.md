
# 🎬 CineVerse - A Movie Discovery Platform

**CineVerse** is a sleek, powerful movie discovery application designed to help users explore and enjoy the world of cinema. Whether you're a casual viewer or a hardcore cinephile, CineVerse provides an intuitive and feature-rich platform to discover trending, top-rated, and upcoming movies.

Built with **React.js** and styled using modern UI frameworks, CineVerse also allows users to **save their favorite movies**, making it a personalized movie tracking experience.

### 🔐 API Key Setup

This project uses the [TMDb API](https://developer.themoviedb.org/) for movie data. To get started:

1. Sign up at [TMDb](https://www.themoviedb.org/) and generate an API key.
2. Create a `.env` file in the project root.
3. Add the following line to the `.env` file:

VITE_TMDB_API_KEY=your_tmdb_api_key_here

> ⚠️ Do not share your `.env` file or your API key publicly.  
> It is included in `.gitignore` and should never be committed.

---

## ✨ Key Features

- 🔍 **Search** movies by name with real-time suggestions
- 📈 **Browse** through Trending, Top Rated, and Upcoming categories
- 💾 **Favorites**: Save your favorite movies for easy access
- 📖 **Movie Details**: View overview, ratings, release dates, and posters
- 📱 **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- 💡 Clean and modern UI with smooth navigation

---

## 🛠️ Tech Stack

| Category     | Tools/Technologies                             |
|--------------|------------------------------------------------|
| **Frontend** | React.js, JavaScript, HTML5, CSS3              |
| **Styling**  | styled-components (or plain CSS if applicable) |
| **API**      | [TMDb API](https://developer.themoviedb.org/) |
| **Versioning** | Git & GitHub                                |
| **Reference** | [TechWithTim - Learn React In One Project](https://youtu.be/G6D9cBaLViA?si=W0ECkzOY_6DQykun)

---

## 📂 Project Structure

```bash
CineVerse-A-Movie-Discovery-Platform/
│
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Home, Favorites, etc.
│   ├── services/        # API logic
│   ├── assets/          # Images, icons
│   ├── context/         # (If used) Global state
│   ├── App.js
│   └── index.js



⸻

🚀 Getting Started
	1.	Clone the repository

git clone https://github.com/Udaya19SRI/CineVerse-A-Movie-Discovery-Platform.git
cd CineVerse-A-Movie-Discovery-Platform

	2.	Install dependencies

npm install

	3.	Start the development server

npm run dev

	4.	Visit http://localhost:5173 in your browser.

⸻

📝 License

© 2025 Udayasri. All rights reserved.

