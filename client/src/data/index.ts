// client/src/data/index.ts

export * from './projects';
export * from './skills';
export * from './experience';
export * from './education';

export interface SocialLinks {
    github: string;
    linkedin: string;
    twitter: string;
    whatsapp: string;
    telegram: string;
    instagram: string;
    email?: string;
}

export interface LinksConfig {
    resumeUrl: string;
    socials: SocialLinks;
}

export const links: LinksConfig = {
    resumeUrl: '/Theophilus_Taiwo_Ajibade_CV.pdf',
    socials: {
        github: 'https://github.com/Theophilus09',
        linkedin: 'https://www.linkedin.com/in/theophilus-ajibade',
        twitter: 'https://x.com/TheoAjibade44',
        whatsapp: 'https://wa.me/2348120271910',
        telegram: 'https://t.me/+2348120271910',
        instagram: 'https://instagram.com/ajibade_theophilus',
        email: 'mailto:ajibadetheophilus217@gmail.com',
    },
};

export const resumeUrl = links.resumeUrl;
export const socials = links.socials;
export const siteConfig = links;
