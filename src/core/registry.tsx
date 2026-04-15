'use client';

import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {
    ServerStyleSheet,
    StyleSheetManager,
    ThemeProvider,
} from 'styled-components';
import { theme } from './theme';
import { I18nProvider } from '@/i18n';
import { Toaster } from 'sonner';

export default function StyledComponentsRegistry({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined')
        return (
            <ThemeProvider theme={theme}>
                <I18nProvider>
                    <Toaster richColors position="top-right" closeButton />
                    {children}
                </I18nProvider>
            </ThemeProvider>
        );

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            <ThemeProvider theme={theme}>
                <I18nProvider>
                    <Toaster richColors position="top-right" closeButton />
                    {children}
                </I18nProvider>
            </ThemeProvider>
        </StyleSheetManager>
    );
}
