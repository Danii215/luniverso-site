'use client';

import type { ButtonHTMLAttributes } from 'react';
import { StyledButton, type ButtonVariant } from './Button.style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};

export function Button({
    variant = 'primary',
    children,
    ...props
}: ButtonProps): React.ReactElement {
    return (
        <StyledButton $variant={variant} {...props}>
            {children}
        </StyledButton>
    );
}
