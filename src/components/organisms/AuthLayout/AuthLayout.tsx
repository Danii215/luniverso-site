'use client';

import { LocaleSwitcher } from '@/components/atoms';
import { FaArrowLeftLong } from 'react-icons/fa6';
import * as S from './AuthLayout.style';
import { theme } from '@/core/theme';
import type { AuthLayoutProps } from './Auth.types';

export function AuthLayout({
    title,
    subtitle,
    panelTitle,
    panelText,
    footerText,
    footerLinkText,
    footerLinkHref,
    children,
}: AuthLayoutProps): React.ReactElement {
    return (
        <S.Page>
            <S.Left>
                <S.TopBar>
                    <S.TopBarReturn href="/">
                        <FaArrowLeftLong
                            size={20}
                            color={theme.colors.primary}
                        />
                    </S.TopBarReturn>
                    <LocaleSwitcher />
                </S.TopBar>
                <S.Card>
                    <S.CardHeader>
                        <S.Title>{title}</S.Title>
                        <S.Subtitle>{subtitle}</S.Subtitle>
                    </S.CardHeader>

                    {children}

                    <S.Footer>
                        {footerText}{' '}
                        <S.FooterLink href={footerLinkHref}>
                            {footerLinkText}
                        </S.FooterLink>
                    </S.Footer>
                </S.Card>
            </S.Left>

            <S.Right>
                <S.Stars />
                <S.BigStars />
                <S.RightContent>
                    <S.RightTitle>{panelTitle}</S.RightTitle>
                    <S.RightText>{panelText}</S.RightText>
                </S.RightContent>
            </S.Right>
        </S.Page>
    );
}
