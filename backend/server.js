require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formRoutes = require("./src/routes/formRoutes");

const app = express();

// Minimal CORS Configuration (unchanged)
const allowedOrigins = [
  'https://autopartocean.com',
  'https://www.autopartocean.com',
  'https://autopartocean-eight.vercel.app',
  'https://autopartocean-fnps-projects.vercel.app',
  'https://autopartocean-git-master-fnps-projects.vercel.app',
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET','POST', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());

// Your existing logging middleware (unchanged)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Origin:", req.headers.origin);
  next();
});

// Your routes (unchanged)
app.get("/", (req, res) => {
  res.send("AutoPart Ocean Backend is Running!");
});

app.use("/api/form", formRoutes);

// Only changes made below this line:
const PORT = process.env.PORT || 3001;

// Updated server startup with error handling
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server successfully started on port ${PORT}`);
})
.on('error', (err) => {
  console.error('SERVER STARTUP FAILED:', err);
  process.exit(1);
});

// Basic error middleware (added)
app.use((err, req, res, next) => {
  console.error('[UNHANDLED ERROR]', err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: 'Something went wrong'
  });
});
