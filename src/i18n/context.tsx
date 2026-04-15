'use client';

import {
    createContext,
    useCallback,
    useContext,
    useState,
    type ReactNode,
} from 'react';
import ptBR from './locales/pt-BR.json';
import en from './locales/en.json';

type Messages = Record<string, unknown>;

export type LocaleConfig = {
    label: string;
    shortLabel: string;
    messages: Messages;
};

const registry: Record<string, LocaleConfig> = {
    'pt-BR': {
        label: 'Português Brasileiro',
        shortLabel: 'BR',
        messages: ptBR,
    },
    'en': { label: 'English', shortLabel: 'EN', messages: en },
};

export type Locale = keyof typeof registry;

type I18nContextValue = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    locales: { id: Locale; label: string; shortLabel: string }[];
    t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
    const value = path.split('.').reduce<unknown>((acc, key) => {
        if (acc && typeof acc === 'object') {
            return (acc as Record<string, unknown>)[key];
        }
        return undefined;
    }, obj);

    return typeof value === 'string' ? value : path;
}

const localeList = Object.entries(registry).map(([id, cfg]) => ({
    id,
    label: cfg.label,
    shortLabel: cfg.shortLabel,
}));

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>('pt-BR');

    const t = useCallback(
        (key: string) =>
            getNestedValue(
                registry[locale].messages as Record<string, unknown>,
                key,
            ),
        [locale],
    );

    return (
        <I18nContext.Provider
            value={{ locale, setLocale, locales: localeList, t }}
        >
            {children}
        </I18nContext.Provider>
    );
}

export function useTranslation() {
    const ctx = useContext(I18nContext);
    if (!ctx)
        throw new Error('useTranslation must be used within I18nProvider');
    return ctx;
}
