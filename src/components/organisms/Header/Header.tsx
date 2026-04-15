'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { IoMdPlanet } from 'react-icons/io';
import { HiShoppingBag } from 'react-icons/hi2';
import { IoIosRocket } from 'react-icons/io';
import { Rocket } from '@/assets/images';
import { Button, LocaleSwitcher } from '@/components/atoms';
import { useTranslation } from '@/i18n';
import * as S from './Header.style';

export function Header(): React.ReactElement {
    const { t } = useTranslation();

    return (
        <S.HeaderContainer>
            <S.Brand href="/">
                <Image src={Rocket} alt="Luniverso" width={36} height={36} />
                <S.Title>Luniverso</S.Title>
            </S.Brand>

            <S.Nav>
                <S.NavLink href="/">
                    <FaHome size={24} /> {t('header.home')}
                </S.NavLink>
                <S.NavLink href="/explore">
                    <IoMdPlanet size={24} /> {t('header.explore')}
                </S.NavLink>
                <S.NavLink href="/market">
                    <HiShoppingBag size={24} /> {t('header.market')}
                </S.NavLink>
                <S.NavLink href="/create">
                    <IoIosRocket size={24} /> {t('header.create')}
                </S.NavLink>
            </S.Nav>

            <S.Spacer />

            <S.Actions>
                <LocaleSwitcher />
                <Link href="/login">
                    <Button variant="ghost">{t('header.login')}</Button>
                </Link>
                <Link href="/signup">
                    <Button variant="primary">{t('header.signup')}</Button>
                </Link>
            </S.Actions>
        </S.HeaderContainer>
    );
}
