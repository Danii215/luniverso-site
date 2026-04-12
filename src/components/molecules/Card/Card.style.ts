import styled from 'styled-components';
import Link from 'next/link';

export const CardContainer = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    border-radius: ${({ theme }) => theme.radii.lg};
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    overflow: hidden;
    transition: all 200ms ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        transform: translateY(1px) scale(1.01) rotate(1deg);
    }
`;

export const ThumbnailWrapper = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const CardBody = styled.div`
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Stats = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

export const Stat = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textSecondary};
`;
