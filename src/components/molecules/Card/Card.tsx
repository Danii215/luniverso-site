'use client';

import Image, { type StaticImageData } from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi2';
import * as S from './Card.style';

export type CardProps = {
    id: string;
    thumbnail: StaticImageData;
    title: string;
    likes: number;
    playersOnline: number;
};

export function Card({
    id,
    thumbnail,
    title,
    likes,
    playersOnline,
}: CardProps): React.ReactElement {
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
                        playing
                    </S.Stat>
                </S.Stats>
            </S.CardBody>
        </S.CardContainer>
    );
}
