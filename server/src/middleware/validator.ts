// server/src/middleware/validator.ts
import { Request, Response, NextFunction } from 'express';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContactInput = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { name, email, subject, message } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
        res.status(400).json({ success: false, message: 'Please provide a valid name (at least 2 characters).' });
        return;
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
        res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
        return;
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
        res.status(400).json({ success: false, message: 'Please provide a valid subject (at least 3 characters).' });
        return;
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
        res.status(400).json({ success: false, message: 'Message must be at least 10 characters long.' });
        return;
    }

    // Sanitize fields before forwarding
    req.body.name = name.trim();
    req.body.email = email.trim().toLowerCase();
    req.body.subject = subject.trim();
    req.body.message = message.trim();

    next();
};