# Chavan Brothers — Architecture

## Tech Stack
- Frontend: React 19, Vite 8, Tailwind CSS v4, Framer Motion
- Backend: Node.js, Express, Mongoose, JWT, bcryptjs
- Database: MongoDB Atlas
- Auth: JWT (30-day expiry)

## Project Structure
chavan-brothers/
├── backend/
│   ├── config/db.js
│   ├── controllers/
│   ├── data/products.js
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── seeder.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hook/
│   │   ├── pages/
│   │   └── services/
│   └── vite.config.js
└── ARCHITECTURE.md
