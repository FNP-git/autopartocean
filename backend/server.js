require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formRoutes = require("./src/routes/formRoutes");

const app = express();

// Minimal CORS Configuration
const allowedOrigins = [
  'https://vercel.com/fnps-projects/autopartocean/53wQ9BG7ng1hmvibaSqmFYtUccNi', // Vercel frontend
  'https://autopartocean.com',        // Your production domain
  'https://www.autopartocean.com'     // WWW variant
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['POST', 'OPTIONS'],       // Only needed methods
  credentials: true
}));

app.use(express.json());
app.use("/api/form", formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
