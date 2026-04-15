'use client';

import Image, { type StaticImageData } from 'next/image';
import { HiOutlinePlay, HiUsers, HiEye } from 'react-icons/hi2';
import { TbArrowBigUp } from 'react-icons/tb';
import { TbArrowBigDown } from 'react-icons/tb';
import { LuStar } from 'react-icons/lu';
import { useTranslation } from '@/i18n';
import * as S from './PlanetDetail.style';
import type { PlanetDetailProps } from './PlanetDetail.types';

export function PlanetDetail({
    id,
    thumbnail,
    title,
    author,
    description,
    likes,
    dislikes,
    playersOnline,
    totalPlays,
}: PlanetDetailProps): React.ReactElement {
    const { t } = useTranslation();

    return (
        <S.Container>
            <S.TopSection>
                <S.LeftColumn>
                    <S.ThumbnailWrapper>
                        <Image
                            src={thumbnail}
                            alt={title}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                    </S.ThumbnailWrapper>
                </S.LeftColumn>

                <S.RightColumn>
                    <S.Title>{title}</S.Title>
                    <S.Author>
                        {t('planet.by')}{' '}
                        <S.AuthorLink
                            href={`/astronauts/${author.toLowerCase()}`}
                        >
                            {author}
                        </S.AuthorLink>
                    </S.Author>

                    <S.Spacer />

                    <S.PlayLink href={`/planet/${id}`}>
                        <HiOutlinePlay size={20} /> {t('planet.play')}
                    </S.PlayLink>
                </S.RightColumn>
            </S.TopSection>
            <S.Actions>
                <S.LikeDislike>
                    <S.LikeButton>
                        <TbArrowBigUp size={18} />
                        {likes.toLocaleString()}
                    </S.LikeButton>
                    <S.DislikeButton>
                        <TbArrowBigDown size={18} />
                        {dislikes.toLocaleString()}
                    </S.DislikeButton>
                </S.LikeDislike>

                <S.FavoriteButton $active={false}>
                    <LuStar size={16} />
                    {t('planet.favorite')}
                </S.FavoriteButton>
            </S.Actions>
            <S.Description>{description}</S.Description>
            <S.StatsRow>
                <S.StatItem>
                    <S.StatValue>
                        <HiUsers size={16} />
                        {playersOnline.toLocaleString()}
                    </S.StatValue>
                    <S.StatLabel>{t('planet.playing')}</S.StatLabel>
                </S.StatItem>

                <S.StatItem>
                    <S.StatValue>
                        <HiEye size={16} />
                        {totalPlays.toLocaleString()}
                    </S.StatValue>
                    <S.StatLabel>{t('planet.visits')}</S.StatLabel>
                </S.StatItem>
            </S.StatsRow>
        </S.Container>
    );
}
