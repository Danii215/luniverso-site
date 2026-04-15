'use client';

import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi2';
import { useTranslation } from '@/i18n';
import type { CardProps } from './Card.types';
import * as S from './Card.style';

export function Card({
    id,
    thumbnail,
    title,
    likes,
    playersOnline,
}: CardProps): React.ReactElement {
    const { t } = useTranslation();

    return (
        <S.CardContainer href={`/planets/${id}`}>
            <S.ThumbnailWrapper>
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </S.ThumbnailWrapper>

            <S.CardBody>
                <S.Title>{title}</S.Title>
                <S.Stats>
                    <S.Stat>
                        <FaHeart size={14} /> {likes.toLocaleString()}
                    </S.Stat>
                    <S.Stat>
                        <HiUsers size={18} /> {playersOnline.toLocaleString()}{' '}
                        {t('card.playing')}
                    </S.Stat>
                </S.Stats>
            </S.CardBody>
        </S.CardContainer>
    );
}
