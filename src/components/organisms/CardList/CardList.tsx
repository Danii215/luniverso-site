'use client';

import { Card, type CardProps } from '@/components/molecules/Card';
import * as S from './CardList.style';

type CardListProps = {
    title: string;
    items: CardProps[];
};

export function CardList({ title, items }: CardListProps): React.ReactElement {
    return (
        <S.Section>
            <S.SectionTitle>{title}</S.SectionTitle>
            <S.Grid>
                {items.map(item => (
                    <Card key={item.id} {...item} />
                ))}
            </S.Grid>
        </S.Section>
    );
}
