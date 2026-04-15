import { StaticImageData } from 'next/image';

interface PlanetDetailProps {
    id: string;
    thumbnail: StaticImageData;
    title: string;
    author: string;
    description: string;
    likes: number;
    dislikes: number;
    playersOnline: number;
    totalPlays: number;
}

export type { PlanetDetailProps };
