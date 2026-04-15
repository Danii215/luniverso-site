'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/atoms';
import { Input } from '@/components/atoms/Input';
import { AuthLayout, Form } from '@/components/organisms/AuthLayout';
import { useTranslation } from '@/i18n';
import type { LoginFormData } from './LoginForm.types';

export function LoginForm(): React.ReactElement {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    function onSubmit(data: LoginFormData) {
        console.log('Login:', data);
    }

    return (
        <AuthLayout
            title={t('login.title')}
            subtitle={t('login.subtitle')}
            panelTitle={t('login.panelTitle')}
            panelText={t('login.panelText')}
            footerText={t('login.noAccount')}
            footerLinkText={t('login.signupLink')}
            footerLinkHref="/signup"
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="email"
                    label={t('login.emailLabel')}
                    type="email"
                    placeholder={t('login.emailPlaceholder')}
                    error={errors.email?.message}
                    {...register('email', {
                        required: t('login.emailRequired'),
                    })}
                />

                <Input
                    id="password"
                    label={t('login.passwordLabel')}
                    type="password"
                    placeholder={t('login.passwordPlaceholder')}
                    error={errors.password?.message}
                    {...register('password', {
                        required: t('login.passwordRequired'),
                    })}
                />

                <Button type="submit" variant="primary">
                    {t('login.submit')}
                </Button>
            </Form>
        </AuthLayout>
    );
}
