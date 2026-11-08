// server/src/server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import contactRoutes from './routes/contact.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

// 1. CORS Configuration
app.use(
    cors({
        origin: [CLIENT_ORIGIN, 'http://localhost:5173', 'http://127.0.0.1:5173'],
        methods: ['POST', 'GET'],
        credentials: true,
    })
);

// 2. Body Parser
app.use(express.json({ limit: '10kb' }));

// 3. Rate Limiting: Max 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        success: false,
        message: 'Too many requests from this IP. Please wait a few minutes before trying again.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// 4. Health Check
app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 5. Contact API Route
app.use('/api/contact', contactLimiter, contactRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Portfolio backend running on http://localhost:${PORT}`);
    console.log(`📡 Accepting client requests from: ${CLIENT_ORIGIN}`);
});