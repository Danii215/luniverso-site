import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    flex-shrink: 0;
`;

export const Toggle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: ${({ theme }) => theme.radii.full};
    border: 1.5px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: all 150ms ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const Dropdown = styled.ul`
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    min-width: 140px;
    padding: 4px 0;
    margin: 0;
    list-style: none;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    z-index: 100;
`;

export const Option = styled.li<{ $active: boolean }>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: 0.875rem;
    font-weight: ${({ $active }) => ($active ? 600 : 400)};
    color: ${({ $active, theme }) =>
        $active ? theme.colors.primary : theme.colors.text};
    cursor: pointer;
    transition: background 100ms ease;

    &:hover {
        background: ${({ theme }) => theme.colors.surface};
    }
`;

export const ShortLabel = styled.span`
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-left: auto;
`;
