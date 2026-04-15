'use client';

import { forwardRef } from 'react';
import * as S from './Input.style';

import type { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, error, id, ...props },
    ref,
) {
    return (
        <S.InputWrapper>
            {label && <S.Label htmlFor={id}>{label}</S.Label>}
            <S.StyledInput id={id} ref={ref} $hasError={!!error} {...props} />
            {error && <S.ErrorText>{error}</S.ErrorText>}
        </S.InputWrapper>
    );
});
