'use client';

import { Thumbnail } from '@/assets/images';
import { Header, CardList } from '@/components/organisms';
import type { CardProps } from '@/components/molecules';
import { useTranslation } from '@/i18n';

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
    const { t } = useTranslation();

    return (
        <main>
            <Header />
            <CardList title={t('home.exploreSection')} items={mockCards} />
        </main>
    );
}
