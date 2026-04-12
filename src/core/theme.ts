export const theme = {
    colors: {
        primary: '#F97316',
        primaryHover: '#EA580C',
        primaryActive: '#C2410C',
        primaryLight: '#FFF7ED',

        secondary: '#1E293B',
        secondaryHover: '#0F172A',
        secondaryLight: '#F1F5F9',

        accent: '#FBBF24',

        success: '#22C55E',
        successHover: '#16A34A',
        error: '#EF4444',

        background: '#FFFFFF',
        surface: '#F8FAFC',
        border: '#E2E8F0',

        text: '#0F172A',
        textSecondary: '#64748B',
        textOnPrimary: '#FFFFFF',
        textOnSecondary: '#FFFFFF',
    },
    fonts: {
        body: 'var(--font-inter), sans-serif',
    },
    radii: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        full: '9999px',
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3rem',
    },
} as const;

export type AppTheme = typeof theme;
