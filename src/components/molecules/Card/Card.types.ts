import { StaticImageData } from 'next/image';

interface CardProps {
    id: string;
    thumbnail: StaticImageData;
    title: string;
    likes: number;
    playersOnline: number;
}

export type { CardProps };
