import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
`;

export const Label = styled.label`
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
`;

export const StyledInput = styled.input<{ $hasError?: boolean }>`
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.9375rem;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    border: 1.5px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    outline: none;
    transition: all 150ms ease;

    &::placeholder {
        color: ${({ theme }) => theme.colors.textSecondary};
        opacity: 0.6;
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
    }

    ${({ $hasError, theme }) =>
        $hasError &&
        css`
            border-color: ${theme.colors.error};

            &:focus {
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
            }
        `}
`;

export const ErrorText = styled.span`
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.error};
`;
