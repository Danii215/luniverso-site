'use client';

import Image from 'next/image';
import { FaHome } from 'react-icons/fa';
import { IoMdPlanet } from 'react-icons/io';
import { HiShoppingBag } from 'react-icons/hi2';
import { IoIosRocket } from 'react-icons/io';
import { Rocket } from '@/assets/images';
import { Button } from '@/components/atoms';
import * as S from './Header.style';

export function Header(): React.ReactElement {
    return (
        <S.HeaderContainer>
            <S.Brand href="/">
                <Image src={Rocket} alt="Luniverso" width={36} height={36} />
                <S.Title>Luniverso</S.Title>
            </S.Brand>

            <S.Nav>
                <S.NavLink href="/">
                    <FaHome size={24} /> Home
                </S.NavLink>
                <S.NavLink href="/explore">
                    <IoMdPlanet size={24} /> Explore
                </S.NavLink>
                <S.NavLink href="/market">
                    <HiShoppingBag size={24} /> Market
                </S.NavLink>
                <S.NavLink href="/create">
                    <IoIosRocket size={24} /> Create
                </S.NavLink>
            </S.Nav>

            <S.Spacer />

            <S.Actions>
                <Button variant="ghost">Join</Button>
                <Button variant="primary">Create Account</Button>
            </S.Actions>
        </S.HeaderContainer>
    );
}
