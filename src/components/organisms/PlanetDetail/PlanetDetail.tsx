'use client';

import Image, { type StaticImageData } from 'next/image';
import {
    HiHeart,
    HiOutlinePlay,
    HiHandThumbUp,
    HiHandThumbDown,
    HiUsers,
    HiEye,
} from 'react-icons/hi2';
import { TbArrowBigUp } from 'react-icons/tb';
import { TbArrowBigDown } from 'react-icons/tb';
import { LuStar } from 'react-icons/lu';
import * as S from './PlanetDetail.style';

export type PlanetDetailProps = {
    id: string;
    thumbnail: StaticImageData;
    title: string;
    author: string;
    description: string;
    likes: number;
    dislikes: number;
    playersOnline: number;
    totalPlays: number;
};

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
                        By{' '}
                        <S.AuthorLink
                            href={`/astronauts/${author.toLowerCase()}`}
                        >
                            {author}
                        </S.AuthorLink>
                    </S.Author>

                    <S.Spacer />

                    <S.PlayLink href={`/planet/${id}`}>
                        <HiOutlinePlay size={20} /> Play
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
                    Favorite
                </S.FavoriteButton>
            </S.Actions>
            <S.Description>{description}</S.Description>
            <S.StatsRow>
                <S.StatItem>
                    <S.StatValue>
                        <HiUsers size={16} />
                        {playersOnline.toLocaleString()}
                    </S.StatValue>
                    <S.StatLabel>Playing</S.StatLabel>
                </S.StatItem>

                <S.StatItem>
                    <S.StatValue>
                        <HiEye size={16} />
                        {totalPlays.toLocaleString()}
                    </S.StatValue>
                    <S.StatLabel>Visits</S.StatLabel>
                </S.StatItem>
            </S.StatsRow>
        </S.Container>
    );
}
