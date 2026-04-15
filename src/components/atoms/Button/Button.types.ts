import type { ButtonHTMLAttributes } from 'react';
import type { ButtonVariant } from './Button.style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export type { ButtonProps };
