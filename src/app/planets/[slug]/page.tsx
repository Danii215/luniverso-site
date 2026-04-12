import { Thumbnail } from '@/assets/images';
import {
    Header,
    PlanetDetail,
    type PlanetDetailProps,
} from '@/components/organisms';

const mockPlanets: PlanetDetailProps[] = [
    {
        id: '1',
        thumbnail: Thumbnail,
        title: 'Test planet',
        author: 'Luniverso',
        description: 'first world test',
        likes: 0,
        dislikes: 0,
        playersOnline: 0,
        totalPlays: 0,
    },
];

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function PlanetPage({ params }: PageProps) {
    const { id } = await params;
    const planet = mockPlanets.find(p => p.id === id) ?? mockPlanets[0];

    return (
        <main>
            <Header />
            <PlanetDetail {...planet} />
        </main>
    );
}
