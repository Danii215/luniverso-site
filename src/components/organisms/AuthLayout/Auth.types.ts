import type { ReactNode } from 'react';

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    panelTitle: string;
    panelText: string;
    footerText: string;
    footerLinkText: string;
    footerLinkHref: string;
    children: ReactNode;
}

export type { AuthLayoutProps };
