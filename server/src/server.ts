import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Permissive CORS configuration for portfolio contact API
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:4173',
    'https://theophilus-ajibade.vercel.app',
    ...(process.env.CLIENT_ORIGIN ? [process.env.CLIENT_ORIGIN] : [])
];

const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
        // Allow server-to-server or requests without origin (like curl, Postman)
        if (!origin) return callback(null, true);

        // Allow any .vercel.app preview deployment or matched origin
        if (allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
            return callback(null, true);
        }

        return callback(null, true); // Fallback: allow request
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
// Handle preflight explicitly
app.options('*', cors(corsOptions));

app.use(express.json());

// Health check endpoint
app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Portfolio backend running on port ${PORT}`);
});