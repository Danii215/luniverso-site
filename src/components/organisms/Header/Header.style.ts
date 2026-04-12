import styled from 'styled-components';
import Link from 'next/link';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
    background: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Brand = styled(Link)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    text-decoration: none;
`;

export const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    margin-left: ${({ theme }) => theme.spacing.xl};
`;

export const NavLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    border-radius: ${({ theme }) => theme.radii.md};
    transition: color 150ms ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Spacer = styled.div`
    flex: 1;
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;
