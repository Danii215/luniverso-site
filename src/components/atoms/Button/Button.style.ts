import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

const variants = {
    primary: css`
        background: linear-gradient(
            30deg,
            ${({ theme }) => theme.colors.accent} 0%,
            ${({ theme }) => theme.colors.primary} 100%
        );
        color: ${({ theme }) => theme.colors.textOnPrimary};
        border: none;
        box-shadow: 0 4px 12px rgba(249, 115, 22, 0.35);

        text-shadow:
            -1px -1px 0 #444,
            1px -1px 0 #444,
            -1px 1px 0 #444,
            1px 1px 0 #444;

        &:hover {
            box-shadow: 0 6px 20px rgba(249, 115, 22, 0.45);
            filter: brightness(1.05);
        }

        &:active {
            box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);
            filter: brightness(0.95);
        }
    `,
    secondary: css`
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.textOnSecondary};
        border: none;

        &:hover {
            background: ${({ theme }) => theme.colors.secondaryHover};
        }
    `,
    outline: css`
        background: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: none;

        &:hover {
            background: ${({ theme }) => theme.colors.primaryLight};
        }
    `,
    ghost: css`
        background: transparent;
        color: ${({ theme }) => theme.colors.text};
        border: none;

        &:hover {
            background: ${({ theme }) => theme.colors.secondaryLight};
        }
    `,
};

export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => ` ${theme.spacing.md} ${theme.spacing.xl}`};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 150ms ease;
    white-space: nowrap;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${({ $variant }) => variants[$variant]}
`;
