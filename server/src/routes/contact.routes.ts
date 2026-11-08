// server/src/routes/contact.routes.ts
import { Router, Request, Response } from 'express';
import { validateContactInput } from '../middleware/validator.js';
import { sendContactEmail } from '../services/email.service.js';

const router = Router();

router.post('/', validateContactInput, async (req: Request, res: Response) => {
    try {
        const { name, email, subject, message } = req.body;

        await sendContactEmail({ name, email, subject, message });

        res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully.',
        });
    } catch (error) {
        console.error('Email dispatch error:', error);
        res.status(500).json({
            success: false,
            message: 'Unable to send email right now. Please try again later or email directly.',
        });
    }
});

export default router;