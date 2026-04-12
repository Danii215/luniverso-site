import styled from 'styled-components';

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.xl};
`;

export const SectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
`;
