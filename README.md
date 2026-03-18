# 🎬 Shows App

[![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**Shows App** is a web application for browsing trending **movies and TV shows**. 

Users can explore trending titles, search shows, filter by genre, view details, and manage a personal favorites list stored locally.

## 📌 Table of Contents
- [🚀 Overview](#-overview)
- [✨ Features](#-features)
- [🧠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Setup & Installation](#-setup--installation)
- [🧭 How to Use](#-how-to-use)
- [🔑 Environment Variables](#-environment-variables)
- [🚀 Deployment](#-deployment)

## 🚀 Overview
Shows App integrates with the **TMDB API** to fetch real-time data. This project demonstrates:
* **Real-world API integration** with server-side fetching.
* **Component-based UI** development using React.
* **Client state management** for favorites using Context API.
* **Modern Routing** using the Next.js App Router.

## ✨ Features
* 🔥 **Trending Content**: Browse the latest movies and series.
* 🔎 **Smart Search**: Find shows by keyword with debouncing.
* 🎭 **Genre Filter**: Filter movies to find exactly what you like.
* 📄 **Detail Pages**: In-depth info, ratings, and synopses.
* ❤️ **Favorites List**: Save shows locally to watch later.
* 🌙 **Theme Support**: Seamless Light and Dark mode.
* 📱 **Responsive**: Optimized for Mobile, Tablet, and Desktop.

## 🧠 Tech Stack
| Tool | Purpose |
| :--- | :--- |
| **Next.js** | Framework (App Router) |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Utility-first Styling |
| **TMDB API** | Movie Data Source |
| **Context API** | Global State Management |

## 📁 Project Structure
```bash
app/
 ├── movies/
 │    └── [id]/          # Show detail page
 ├── favorites/          # Favorites collection
 ├── layout.tsx          # Root layout & Navbar
 └── page.tsx            # Homepage (Trending)
components/              # Reusable UI Components
lib/                     # API integration logic
context/                 # FavoriteContext logic
```

## ⚙️ Setup & Installation

Follow these steps to get the project up and running on your local machine.

**1️⃣ Clone the repository**
```bash
git clone https://github.com/yuukiiiss/shows-app.git
cd shows-app
```
**2️⃣ Install Dependencies**
```bash
npm install
```
**3️⃣ Configure Environment Variables**

   Create a `.env.local` file in the root directory and add your TMDB API Key:

   ```bash
   TMDB_API_KEY=your_api_key_here
   ```
**4️⃣ Run Development Server**
```bash
npm run dev
```
**5️⃣ Open in Browser**

   Visit http://localhost:3000 to see the app in action.


## 🧭 How to Use

- **Discover** — Explore trending movies and TV shows from the homepage.  
- **Search** — Quickly find specific titles using the search feature.
- **Filter** — Narrow results by selecting genres or entering keywords.
- **View Details** — Click on any movie or tv show card for more information
- **Manage Favorites** — Add or remove shows using the heart icon.
- **Switch Theme** — Toggle between Light and Dark modes.


## 🚧 Future Improvements

Potential features for future development:

- Pagination or infinite scrolling for smoother content exploration  
- Advanced filtering options (release year, rating, language)  
- Trailer preview integration using TMDB video endpoints  
- Server-side caching and performance optimization  
- Improved accessibility (ARIA support & keyboard navigation)  
- Unit and integration testing coverage  
- Progressive Web App (PWA) support for installable experience  
- Optional user authentication for cloud-synced favorites

## 🔑 Environment Variables
To fetch real-time data, this app requires a **TMDB API Key**.

- Register for a free account at **TMDB**  
- Go to **Settings → API** to generate your API key  
- Make sure your `.env` file is included in `.gitignore` to keep your key secure

## 🚀 Deployment

This project is optimized for deployment using **Vercel**.

Follow these steps to deploy the application:

**1️⃣ Push repository to GitHub**  
   Make sure your latest changes are committed and pushed.

**2️⃣ Import project in Vercel**  
   Go to https://vercel.com → click **Add New Project** → select this repository.

**3️⃣ Add environment variable**

   ```bash
   TMDB_API_KEY=your_api_key_here
   ```
**4️⃣ Deploy**

   Vercel will automatically build and deploy the application after the setup is complete.

## 📄 License
This project is built for learning and portfolio purposes under the MIT License.