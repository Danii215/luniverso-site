'use client';

import * as S from './LocaleSwitcher.style';
import { useLocaleSwitcher } from './LocaleSwitcher.hook';

export function LocaleSwitcher(): React.ReactElement {
    const { current, open, setOpen, ref, locales, setLocale, locale } =
        useLocaleSwitcher();

    return (
        <S.Wrapper ref={ref}>
            <S.Toggle
                onClick={() => setOpen(prev => !prev)}
                title={current?.label}
                type="button"
            >
                {current?.shortLabel}
            </S.Toggle>

            {open && (
                <S.Dropdown>
                    {locales.map(l => (
                        <S.Option
                            key={l.id}
                            $active={l.id === locale}
                            onClick={() => {
                                setLocale(l.id);
                                setOpen(false);
                            }}
                        >
                            {l.label}
                            <S.ShortLabel>{l.shortLabel}</S.ShortLabel>
                        </S.Option>
                    ))}
                </S.Dropdown>
            )}
        </S.Wrapper>
    );
}
