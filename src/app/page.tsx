import { Thumbnail } from '@/assets/images';
import { Header, CardList } from '@/components/organisms';
import type { CardProps } from '@/components/molecules';

const mockCards: CardProps[] = [
    {
        id: '1',
        thumbnail: Thumbnail,
        title: 'Test planet',
        likes: 0,
        playersOnline: 0,
    },
];

export default function Home(): React.ReactElement {
    return (
        <main>
            <Header />
            <CardList title="Explore" items={mockCards} />
        </main>
    );
}
