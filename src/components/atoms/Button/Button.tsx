'use client';

import { StyledButton } from './Button.style';
import type { ButtonProps } from './Button.types';

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
