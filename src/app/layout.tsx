import type { Metadata } from 'next';
import '@/core/reset.css';
import { inter } from '@/assets/fonts';
import StyledComponentsRegistry from '@/core/registry';

export const metadata: Metadata = {
    title: 'Luniverso',
    description: 'Luniverso',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
