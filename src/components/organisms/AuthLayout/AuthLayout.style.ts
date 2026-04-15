import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const twinkle = keyframes`
    0%, 100% { opacity: 0.2; }
    50%      { opacity: 1; }
`;

const twinkleSlow = keyframes`
    0%, 100% { opacity: 0.15; }
    50%      { opacity: 0.9; }
`;

const drift = keyframes`
    0%   { transform: translate(0, 0); }
    25%  { transform: translate(6px, -4px); }
    50%  { transform: translate(-3px, -7px); }
    75%  { transform: translate(-6px, 2px); }
    100% { transform: translate(0, 0); }
`;

export const Page = styled.div`
    display: flex;
    flex-direction: row-reverse;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.surface};
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.xl};
    position: relative;
`;

export const Right = styled.div`
    flex: 1;
    display: none;
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.secondary} 0%,
        ${({ theme }) => theme.colors.secondaryHover} 100%
    );
    position: relative;
    overflow: hidden;

    @media (min-width: 960px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const RightContent = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.colors.textOnSecondary};
    padding: ${({ theme }) => theme.spacing.xxl};
    max-width: 420px;
    position: relative;
    z-index: 1;
`;

export const RightTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const RightText = styled.p`
    font-size: 1.0625rem;
    opacity: 0.8;
    line-height: 1.6;
`;

export const Card = styled.div`
    width: 100%;
    max-width: 420px;
    background: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.radii.lg};
    padding: ${({ theme }) => theme.spacing.xxl};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TopBar = styled.div`
    position: absolute;
    top: ${({ theme }) => theme.spacing.md};
    right: ${({ theme }) => theme.spacing.md};
    display: flex;
    align-items: center;
`;

export const TopBarReturn = styled(Link)`
    color: ${({ theme }) => theme.colors.text};
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${({ theme }) => theme.spacing.md};
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;

export const CardHeader = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 4px;
`;

export const Subtitle = styled.p`
    font-size: 0.9375rem;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
`;

export const Footer = styled.p`
    text-align: center;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const FooterLink = styled(Link)`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const starsBase = `
    position: absolute;
    inset: 0;
    border-radius: inherit;
`;

export const Stars = styled.div`
    position: absolute;
    inset: 0;

    &::before {
        content: '';
        ${starsBase}
        background-image:
            radial-gradient(1px 1px at 5% 12%, rgba(255,255,255,0.30) 50%, transparent 50%),
            radial-gradient(1px 1px at 25% 8%, rgba(255,255,255,0.25) 50%, transparent 50%),
            radial-gradient(1px 1px at 35% 42%, rgba(255,255,255,0.28) 50%, transparent 50%),
            radial-gradient(1px 1px at 48% 65%, rgba(255,255,255,0.22) 50%, transparent 50%),
            radial-gradient(1px 1px at 58% 78%, rgba(255,255,255,0.30) 50%, transparent 50%),
            radial-gradient(1px 1px at 68% 88%, rgba(255,255,255,0.26) 50%, transparent 50%),
            radial-gradient(1px 1px at 75% 72%, rgba(255,255,255,0.24) 50%, transparent 50%),
            radial-gradient(1px 1px at 82% 38%, rgba(255,255,255,0.28) 50%, transparent 50%),
            radial-gradient(1px 1px at 88% 48%, rgba(255,255,255,0.22) 50%, transparent 50%),
            radial-gradient(1px 1px at 95% 35%, rgba(255,255,255,0.26) 50%, transparent 50%),
            radial-gradient(1px 1px at 3% 45%, rgba(255,255,255,0.30) 50%, transparent 50%),
            radial-gradient(1px 1px at 38% 58%, rgba(255,255,255,0.24) 50%, transparent 50%),
            radial-gradient(1px 1px at 65% 95%, rgba(255,255,255,0.28) 50%, transparent 50%),
            radial-gradient(1px 1px at 18% 98%, rgba(255,255,255,0.22) 50%, transparent 50%),
            radial-gradient(1px 1px at 50% 15%, rgba(255,255,255,0.26) 50%, transparent 50%),
            radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.30) 50%, transparent 50%),
            radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.20) 50%, transparent 50%),
            radial-gradient(1px 1px at 50% 90%, rgba(255,255,255,0.28) 50%, transparent 50%);
    }

    &::after {
        content: '';
        ${starsBase}
        animation: ${twinkle} 3s ease-in-out infinite;
        background-image:
            radial-gradient(
                1.5px 1.5px at 10% 80%,
                rgba(255, 255, 255, 0.5) 50%,
                transparent 50%
            ),
            radial-gradient(
                1.5px 1.5px at 15% 55%,
                rgba(255, 255, 255, 0.45) 50%,
                transparent 50%
            ),
            radial-gradient(
                1.5px 1.5px at 45% 18%,
                rgba(255, 255, 255, 0.55) 50%,
                transparent 50%
            ),
            radial-gradient(
                1.5px 1.5px at 62% 52%,
                rgba(255, 255, 255, 0.4) 50%,
                transparent 50%
            ),
            radial-gradient(
                1.5px 1.5px at 70% 45%,
                rgba(255, 255, 255, 0.5) 50%,
                transparent 50%
            ),
            radial-gradient(
                1.5px 1.5px at 78% 10%,
                rgba(255, 255, 255, 0.45) 50%,
                transparent 50%
            ),
            radial-gradient(
                1.5px 1.5px at 92% 68%,
                rgba(255, 255, 255, 0.5) 50%,
                transparent 50%
            ),
            radial-gradient(
                1.5px 1.5px at 12% 28%,
                rgba(255, 255, 255, 0.4) 50%,
                transparent 50%
            ),
            radial-gradient(
                1.5px 1.5px at 83% 5%,
                rgba(255, 255, 255, 0.55) 50%,
                transparent 50%
            ),
            radial-gradient(
                1.5px 1.5px at 33% 75%,
                rgba(255, 255, 255, 0.45) 50%,
                transparent 50%
            );
    }
`;

export const BigStars = styled.div`
    position: absolute;
    inset: 0;
    animation:
        ${twinkleSlow} 5s ease-in-out infinite,
        ${drift} 20s ease-in-out infinite;
    background-image:
        radial-gradient(
            3px 3px at 20% 30%,
            rgba(255, 255, 255, 0.7) 50%,
            transparent 50%
        ),
        radial-gradient(
            2.5px 2.5px at 40% 70%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 50%
        ),
        radial-gradient(
            3.5px 3.5px at 72% 25%,
            rgba(255, 255, 255, 0.75) 50%,
            transparent 50%
        ),
        radial-gradient(
            3px 3px at 90% 15%,
            rgba(255, 255, 255, 0.65) 50%,
            transparent 50%
        ),
        radial-gradient(
            2.5px 2.5px at 55% 5%,
            rgba(255, 255, 255, 0.55) 50%,
            transparent 50%
        ),
        radial-gradient(
            3px 3px at 30% 92%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 50%
        ),
        radial-gradient(
            3.5px 3.5px at 85% 82%,
            rgba(255, 255, 255, 0.7) 50%,
            transparent 50%
        ),
        radial-gradient(
            2.5px 2.5px at 52% 45%,
            rgba(255, 255, 255, 0.55) 50%,
            transparent 50%
        ),
        radial-gradient(
            3px 3px at 42% 2%,
            rgba(255, 255, 255, 0.65) 50%,
            transparent 50%
        ),
        radial-gradient(
            3px 3px at 97% 55%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 50%
        );
`;
