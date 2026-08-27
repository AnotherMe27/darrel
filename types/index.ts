export interface Achievement {
    title: string;
    description: string;
    date: string;
    category: string;
    imageUrl: string;
}

export interface Project {
    title: string;
    description: string;
    date: string;
    category: string;
    imageUrl: string;
    link?: string;
}

export interface GalleryImage {
    url: string;
    description: string;
    category: string;
}

export interface Profile {
    name: string;
    biography: string;
    interests: string[];
    goals: string[];
    imageUrl: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    socialMedia: {
        [platform: string]: string;
    };
    location?: string;
}