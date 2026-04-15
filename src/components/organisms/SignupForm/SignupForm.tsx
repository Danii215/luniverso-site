'use client';

import { Button, Input } from '@/components/atoms';
import { AuthLayout, Form } from '@/components/organisms';
import { useSignupForm } from './SignupForm.hook';

export function SignupForm(): React.ReactElement {
    const { t, errors, register, handleSubmit, watch, onSubmit } =
        useSignupForm();

    return (
        <AuthLayout
            title={t('signup.title')}
            subtitle={t('signup.subtitle')}
            panelTitle={t('signup.panelTitle')}
            panelText={t('signup.panelText')}
            footerText={t('signup.hasAccount')}
            footerLinkText={t('signup.loginLink')}
            footerLinkHref="/login"
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="username"
                    label={t('signup.usernameLabel')}
                    type="text"
                    placeholder={t('signup.usernamePlaceholder')}
                    error={errors.username?.message}
                    {...register('username', {
                        required: t('signup.usernameRequired'),
                    })}
                />

                <Input
                    id="email"
                    label={t('signup.emailLabel')}
                    type="email"
                    placeholder={t('signup.emailPlaceholder')}
                    error={errors.email?.message}
                    {...register('email', {
                        required: t('signup.emailRequired'),
                    })}
                />

                <Input
                    id="password"
                    label={t('signup.passwordLabel')}
                    type="password"
                    placeholder={t('signup.passwordPlaceholder')}
                    error={errors.password?.message}
                    {...register('password', {
                        required: t('signup.passwordRequired'),
                        minLength: {
                            value: 8,
                            message: t('signup.passwordMinLength'),
                        },
                    })}
                />

                <Input
                    id="confirm-password"
                    label={t('signup.confirmPasswordLabel')}
                    type="password"
                    placeholder={t('signup.confirmPasswordPlaceholder')}
                    error={errors.confirmPassword?.message}
                    {...register('confirmPassword', {
                        required: t('signup.confirmPasswordRequired'),
                        validate: value =>
                            value === watch('password') ||
                            t('signup.passwordsMismatch'),
                    })}
                />

                <Button type="submit" variant="primary">
                    {t('signup.submit')}
                </Button>
            </Form>
        </AuthLayout>
    );
}
