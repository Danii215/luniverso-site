import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.xl};
`;

export const TopSection = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.xl};
    align-items: stretch;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    flex: 0 0 420px;

    @media (max-width: 640px) {
        flex: 1;
    }
`;

export const ThumbnailWrapper = styled.div`
    position: relative;
    width: 600px;
    aspect-ratio: 16 / 9;
    border-radius: ${({ theme }) => theme.radii.lg};
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => `${theme.spacing.md} 0`};
    gap: ${({ theme }) => theme.spacing.md};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const LikeDislike = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

export const LikeButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.success};
    transition: opacity 150ms ease;

    &:hover {
        opacity: 0.8;
    }
`;

export const DislikeButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.error};
    transition: opacity 150ms ease;

    &:hover {
        opacity: 0.8;
    }
`;

export const FavoriteButton = styled.button<{ $active: boolean }>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: 0;
    border: none;
    background: none;
    color: ${({ theme, $active }) =>
        $active ? theme.colors.primary : theme.colors.textSecondary};
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: color 150ms ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const RightColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
`;

export const Author = styled.span`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const AuthorLink = styled(Link)`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Description = styled.p`
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    padding: ${({ theme }) => theme.spacing.md} 0;
`;

export const StatsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.md} 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const StatValue = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
`;

export const StatLabel = styled.span`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const Spacer = styled.div`
    flex: 1;
`;

export const PlayLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
    border-radius: ${({ theme }) => theme.radii.md};
    border: none;
    background: ${({ theme }) => theme.colors.success};
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: all 150ms ease;
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.35);

    &:hover {
        background: ${({ theme }) => theme.colors.successHover};
        box-shadow: 0 6px 20px rgba(34, 197, 94, 0.45);
    }
`;
