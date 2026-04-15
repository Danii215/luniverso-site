import { useTranslation } from '@/i18n';
import { useEffect, useRef, useState } from 'react';

export function useLocaleSwitcher() {
    const { locale, setLocale, locales } = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const current = locales.find(l => l.id === locale);

    return {
        current,
        open,
        locale,
        locales,
        ref,
        setOpen,
        setLocale,
    };
}
