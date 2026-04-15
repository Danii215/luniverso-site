'use client';

import { Card } from '@/components/molecules';
import * as S from './CardList.style';
import type { CardListProps } from './CardList.types';

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
